<template>
  <v-main>
    <h1 class="text-xs">
        Dados da Empresa
    </h1>
    <br>
    <p class="font-weight-black">
        1. Informações da Empresa
    </p>
    <p class="text-justify">
        Preencha com os dados de endereço da sede da empresa.
    </p>
    <v-form
        @submit.prevent="handleSubmit"
        ref="form"
        v-model="valid"
        lazy-validation>
        <v-text-field
            v-model="form.socialName"
            label="Razão Social"
            :rules="socialNameRules"
            required
        ></v-text-field>
        <v-text-field
            v-model="form.cnpj"
            label="CNPJ"
            v-mask="'##.###.####/####.##'"
            :rules="cnpjRules"
            required
        ></v-text-field>
        <v-text-field
            v-model="form.quantityMembers"
            label="Quantos colaboradores sua empresa possui?"
            type="number"
            :rules="quantityMembersRules"
            required
        ></v-text-field>
        <br>
        <span class="font-weight-black">Tipo de tributação:</span>
        <v-radio-group v-model="form.tipoTributacao" :rules="tipoTributacaoRules" required>
            <v-radio value="1" label="Simples Nacional"></v-radio>
            <v-radio value="2" label="Lucro Presumido"></v-radio>
            <v-radio value="3" label="Lucro Real"></v-radio>
        </v-radio-group>
        <br>
        <v-row class="mb-10">
            <v-col cols="6">
                <v-btn color="error" outlined large block @click="prev">
                    Voltar
                </v-btn>
            </v-col>
        
            <v-col cols="6">
                <v-btn color="secondary" large block  @click="handleSubmit">
                    Enviar
                </v-btn>
            </v-col>
        </v-row>
    </v-form>
  </v-main>
</template>

<script>
export default {
    layout: "lojacorr",
    data() {
        return {
            valid: true,
            form: {
                socialName: '',
                cnpj: '',
                quantityMembers: '',
                tipoTributacao: null,
            },
            socialNameRules: [
                v => !!v || 'Razão social é obrigatório',
            ],
            cnpjRules: [
                v => !!v || 'CNPJ é obrigatório',
            ],
            quantityMembersRules: [
                v => !!v || 'Quantidade de colaboradores é obrigatório',
            ],
            tipoTributacaoRules: [
                v => !!v || 'Tipo de tributação é obrigatório',
            ],
        }
    },
    created(){
        this.$store.commit('lojacorr/nextPage', {progress: 100, step: 3})
        this.form = Object.assign(this.form, this.$store.state.lojacorr.form)
    },
    methods: {
        handleSubmit() {
            const isValid = this.$refs.form.validate()
            if (!isValid) return;

            this.$store.commit('lojacorr/saveForm', this.form)
            this.$router.push('/success')
        },
        prev() {
            this.$router.push('/form')
        }
    }
}
</script>

<style>

</style>