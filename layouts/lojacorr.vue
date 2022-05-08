<template>
  <v-app>
      <Header/>
      
      <v-main style="background-color: #EEE;">
          <v-progress-linear fixed color="red lighten-2" :value="progressBar"></v-progress-linear>
          <v-container style="background-color: #FFF;">
                <div style="max-width: 700px; margin: 0 auto;" class="mt-10">
                  <span class="font-weight-black" style="color: rgb(176,88,88);">{{ step }} de 3</span>
                  <Nuxt />
                </div>
          </v-container>
      </v-main>
  </v-app>
</template>

<script>
export default {
   name: "LojacorrLayout",
   data() {
     return {

     }
   },
   computed: {
     step() {
       return this.$store.state.lojacorr.step
     },
     progressBar() {
       return this.$store.state.lojacorr.progress
     }
   }
}
</script>

<style>

</style>