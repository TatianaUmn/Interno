<template>
    <div :class="$style.box">
      <!--  -->
      <!-- bannet -->
      <MainBanner />
      <!-- follow our projects -->
      <MainFollow />
  
      <!-- COUNTER -->
      <div :class="[$style.counter, $style.center]">
        <div
          :class="$style.counter__item"
          v-for="item in counters"
          :key="item.id"
        >
          <p :class="$style.counter__item_number">{{ item.number }}</p>
          <p :class="$style.counter__item_text">{{ item.description }}</p>
        </div>
      </div>
  
      <!-- articles and news -->
      <MainArticles />
  
      <!--  -->
    </div>
  </template>
  
  <script>
  import MainArticles from "../blocks/MainArticles.vue";
  import MainBanner from "../blocks/MainBanner.vue";
  import MainFollow from "../blocks/MainFollow.vue";
  
  export default {
    components: { MainBanner, MainFollow, MainArticles },
  
    name: "MainPage",
  
    data() {
      return {
        counters: [
          { number: 12, description: "Years Of Experiance" },
          { number: 85, description: "Success Project" },
          { number: 15, description: "Active Project" },
          { number: 95, description: "Happy Customers" },
        ],
      };
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
  .box {
    margin-top: 70px;
    margin-bottom: 96px;
  }
  
  .counter {
    margin-top: 100px;
    background-color: rgba(244, 240, 236, 1);
    min-height: 100px;
    padding-top: 151px;
    padding-bottom: 151px;
  
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  
    &__item {
      width: 25%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 16px;
  
      border-right: 1px solid rgba(205, 162, 116, 1);
      box-sizing: border-box;
  
      &_number {
        color: #cda274;
        font-family: DM Serif Display;
        font-size: 85px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 1.7px;
      }
      &_text {
        color: #4d5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
      }
    }
  }
  </style>