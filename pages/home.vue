<template>
  <v-main>
    <h1 class="text-xs">Olá!</h1>
    <br/>
    <p class="text-justify">Obrigado pelo interesse em fazer parte da Rede Lojacorr, Você está apenas a alguns passos de fazer parte da maior Rede de Corretores Independentes do Brasil. Preecha o formulário a seguir para solicitar uma análise do seu perfil por parte do nosso time</p>
    <br>
    <p class="font-weight-black">Para esse cadastro você precisa ter em maõs:</p>
    <ul>
        <li>Número de CNPJ</li>
        <li>Cópia do RG (frente e verso)</li>
        <li>Cópia do CPF</li>
        <li>Comprovante de residência</li>
        <li>Cópia do contrato de Sociedade</li>
        <li>Cartão do CNPJ</li>
    </ul>
    <br>
    <p class="text-justify">
        Precisamos da sua autorização para utilizar os dados fornecidos neste cadastro a fim de fazer consultas nos órgãos responsáveis. Leia e marque a caixa para liberar o formulário.
    </p>
    <v-checkbox v-model="form.accept" value>
        <template slot="label">
            Termo de aceite para <a class="ml-1 blue--text text--lighten-2" href="#">Utilização de Dados</a>
        </template>
    </v-checkbox>
    <v-row
        align="center"
        justify="space-around"
        class="mb-10"
    >
        <v-spacer />
        <v-btn right color="secondary" x-large :disabled="!form.accept" @click="next">
            Próximo
        </v-btn>
    </v-row>
  </v-main>
</template>

<script>
export default {
    layout: "lojacorr",
    data() {
        return {
            form: {
                accept: false
            }
        }
    },
    created() {
        this.$store.commit('lojacorr/goToHome')
        this.form.accept = this.$store.state.lojacorr.form.accept
    },
    methods: {
        next() {
            this.$store.commit('lojacorr/saveForm', this.form)
            this.$router.push('/form')
        }
    }
}
</script>

<style>

</style>