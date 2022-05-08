<template>
    <v-app-bar app>
        <v-img
        fixed
        icon
        max-height="auto"
        max-width="140"
        src="https://www.lidemultimidia.com.br/wp-content/uploads/2016/11/Logo-Rede-Lojacorr-CSI-Medio.png"
        ></v-img>
        <v-spacer />
        <v-btn @click="goToHome">
            <v-icon>mdi-chevron-left</v-icon>
            Voltar ao site
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: "Header",
    methods: {
        goToHome() {
            this.$store.commit('lojacorr/goToHome')
            this.$router.push("/home")
        }
    }
}
</script>

<style>

</style>