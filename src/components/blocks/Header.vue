<template>
    <!-- 
  
           -->
    <header :class="[$style.header, $style.center]">
      <!-- левая часть  -->
  
      <router-link to="/" :class="$style.header__left">
        <img :class="$style.header__left_img" src="/img/header-logo.svg" alt="foto" />
        <p :class="$style.header__left_text">Interno</p>
      </router-link>
  
      <!-- правая часть -->
      <nav :class="$style.header__right">
        <router-link
          to="/"
          exact
          :active-class="$style.active"
          :class="$style.header__right_text"
          >Home</router-link
        >
        <router-link
          to="/Project"
          exact
          :class="$style.header__right_text"
          :active-class="$style.active"
          >Project</router-link
        >
        <router-link
          to="/Blog"
          exact
          :class="$style.header__right_text"
          :active-class="$style.active"
          >Blog</router-link
        >
      </nav>
    </header>
  
    <!-- 
           -->
  </template>
  
  <script>
  export default {
    name: "HeaderComponent",
  
    data() {
      return {};
    },
  
    mounted() {},
  
    methods: {},
  };
  </script>
  
  <style lang="scss" module>
  .center {
    padding-right: calc(50% - 600px);
    padding-left: calc(50% - 600px);
  }
  
  // HEADER
  .header {
    margin-top: 61px;
  
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
  
    //   левая часть Header
    &__left {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: center;
      align-items: center;
      justify-content: center;
      gap: 10px;
  
      &__img {
        width: 34px;
        height: 34px;
      }
  
      &_text {
        color: #292f36;
        font-family: DM Serif Display;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        color: rgba(41, 47, 54, 1);
      }
    }
    // правая часть Header
    &__right {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: center;
      justify-content: center;
      gap: 30px;
  
      &_text {
        // color: #292f36;
        color: var(--mainColorText);
        text-align: center;
        font-family: Jost;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
      }
  
      &_text:hover {
        color: rgba(205, 162, 116, 1);
      }
    }
  } // header
  
  .active {
    color: rgba(205, 162, 116, 1);
  }
  </style>