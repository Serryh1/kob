<template>
  <NavBar></NavBar>
  <router-view/>
</template>

<script>
import  NavBar from '@/components/NavBar.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"


export default {
  components :{
    NavBar
  }
}

</script>

<style>              /*css*/
body{
  background-image: url("@/assets/imags/background.png");
  background-size: cover;
}
</style>
