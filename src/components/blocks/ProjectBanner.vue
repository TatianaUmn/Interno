<template>
    <div :class="$style.box">
      <!--  -->
      <div :class="$style.center">
        <div :class="$style.rectangle">
          <div :class="$style.rectangle__title">Our Project</div>
          <div :class="$style.rectangle__text">Home / Project</div>
        </div>
      </div>
      <!--  -->
    </div>
  </template>
  
  <script>
  export default {
    name: "ProjectBanner",
  
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
  .box {
    background-image: url(/public/img/project/projectBanner.png);
    background-size: cover;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height: 356px;
  
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
  }
  
  .rectangle {
    width: 504px;
    border-radius: 37px 37px 0px 0px;
    background: #fff;
    padding: 41px 125px;
    text-align: center;
  
    &__title {
      color: var(--mainColorText);
      font-family: DM Serif Display;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
    }
    &__text {
      color: #4d5053;
      font-family: Jost;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 33px */
      letter-spacing: 0.22px;
    }
  }
  </style>