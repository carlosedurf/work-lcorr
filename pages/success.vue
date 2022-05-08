<template>
  <v-main>
    <h1 class="text-xs">
        Cadastro enviado com sucesso!
    </h1>
    <br>
    <p class="text-justify">
        Seu cadastro foi efetuado e enviado para análise. Você receberá um link com o código para acompanhar a situação do seu cadastro. <br>
        Fique atento a sua caixa de e-mail!
    </p>
    
    <v-btn right color="error" class="lighten-0 mt-10 mb-10" x-large @click="$router.push('/home')">
        Voltar para o site
    </v-btn>
  </v-main>
</template>

<script>
export default {
    layout: "lojacorr",
    data() {
        return {
            socialName: '',
            cnpj: '',
            quantityMembers: '',
            tipoTributacao: null,
        }
    },
    created(){
        this.$store.commit('lojacorr/nextPage', {progress: 100, step: 3})
    }
}
</script>

<style>

</style>