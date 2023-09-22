<template>
  <div id="app">
    <HeaderComponent/>
    <MainPage/>
    <router-view></router-view>
   
    <FooterComponent/>

  </div>
</template>

<script>

import HeaderComponent from "./components/blocks/Header.vue";
import MainPage from './components/pages/MainPage.vue';
import FooterComponent from "./components/blocks/Footer.vue";


export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainPage,
    FooterComponent, 
  }
}
</script>

<style>
#app {
  font-family: DM Serif Display, Jost, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
}

@import './assets/style/globle.scss';


</style>