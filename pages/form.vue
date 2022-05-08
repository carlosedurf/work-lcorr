<template>
  <v-main>
    <h1 class="text-xs">
        Dados do Sócio Administrador
    </h1>
    <br>
    <p class="font-weight-black">
        1. Dados de cadastro
    </p>
    <p class="text-justify">
        Preencha os campos abaixo e anexe a documentação solicitada para realizar o cadastro.
    </p>
    <v-form
        @submit.prevent="handleSubmit"
        ref="form"
        v-model="valid"
        lazy-validation>
        <v-text-field
            v-model="form.name"
            label="Nome Completo"
            :rules="nameRules"
            required
        ></v-text-field>
        <v-text-field
            v-model="form.email"
            label="E-mail"
            :rules="emailRules"
            required
        ></v-text-field>
        <v-text-field
            v-model="form.phoneWork"
            label="Telefone Comercial (com DDD)"
            v-mask="'(##) #####-####'"
            :rules="phoneWorkRules"
            required
        ></v-text-field>
        <v-text-field
            v-model="form.phone"
            label="Telefone para contato (com DDD)"
            v-mask="'(##) #####-####'"
            :rules="phoneRules"
            required
        ></v-text-field>
        <v-row>
            <v-col cols="6">
                <v-text-field
                    v-model="form.rg"
                    label="RG"
                    v-mask="'##.###.###-##'"
                    :rules="rgRules"
                    required
                ></v-text-field>
            </v-col>
        
            <v-col cols="6">
                <v-text-field
                    v-model="form.oe"
                    label="Órgão Emissor"
                    :rules="oeRules"
                    required
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <v-text-field
                    v-model="form.cpf"
                    label="CPF"
                    v-mask="'###.###.###-##'"
                    :rules="cpfRules"
                    required
                ></v-text-field>
            </v-col>
        
            <v-col cols="6">
                <v-text-field
                    v-model="form.bithdate"
                    label="Data de Nascimento"
                    v-mask="'##/##/####'"
                    :rules="bithdateRules"
                    required
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row class="mb-10">
            <v-col cols="6">
                <v-btn color="error" outlined large block @click="prev">
                    Voltar
                </v-btn>
            </v-col>
        
            <v-col cols="6">
                <v-btn color="secondary" large block @click="handleSubmit">
                    Próximo
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
                name: '',
                email: '',
                phoneWork: '',
                phone: '',
                rg: '',
                oe: '',
                cpf: '',
                bithdate: ''
            },
            emailRules: [
                v => !!v || 'E-mail é obrigatório',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            nameRules: [
                v => !!v || 'Nome é obrigatório',
            ],
            phoneWorkRules: [
                v => !!v || 'Telefone é obrigatório',
            ],
            phoneRules: [
                v => !!v || 'Telefone é obrigatório',
            ],
            rgRules: [
                v => !!v || 'RG é obrigatório',
            ],
            oeRules: [
                v => !!v || 'Órgão Emissor é obrigatório',
            ],
            cpfRules: [
                v => !!v || 'CPF é obrigatório',
            ],
            bithdateRules: [
                v => !!v || 'Data de Nascimento é obrigatório',
            ]
        }
    },
    created(){
        this.$store.commit('lojacorr/nextPage', {progress: 66, step: 2})
        this.form = Object.assign(this.form, this.$store.state.lojacorr.form)
    },
    methods: {
        handleSubmit() {
            const isValid = this.$refs.form.validate()
            if (!isValid) return;

            this.$store.commit('lojacorr/saveForm', this.form)
            this.$router.push('/company')
        },
        prev() {
            this.$router.push('/home')
        }
    }
}
</script>

<style>

</style>