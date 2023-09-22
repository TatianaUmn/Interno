<template>
    <div :class="[$style.banner, $style.center]">
      <!--  -->
      <p :class="$style.title">Let Your Home Be Unique</p>
  
      <p :class="$style.text">
        There are many variations of the passages of lorem Ipsum fromavailable,
        majority.
      </p>
  
      <a href="#" :class="$style.buttonPosition">
        <button :class="$style.button">
          Get Started
          <img src="/img/main/banner_btn.svg" alt="" />
        </button>
      </a>
      <!--  -->
    </div>
  </template>
  
  <script>
  export default {
    name: "MainBanner",
  
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
  .banner {
    width: 1200px;
    height: 758px;
  
    background-image: url(/public/img/main/main_banner.png);
    background-size: cover;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
  
  .title {
    padding-left: 52px;
    color: #292f36;
    font-family: DM Serif Display;
    font-size: 65px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    max-width: 434px;
  }
  
  .text {
    padding-left: 52px;
    color: #4d5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
    max-width: 434px;
  }
  
  .buttonPosition {
    padding-left: 52px;
  }
  
  .button {
    width: 220px;
    height: 75px;
    border-radius: 18px;
    background: #292f36;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
  
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
  
    color: #fff;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.36px;
  }
  
  .button:hover {
    color: rgba(205, 162, 116, 1);
  }
  </style>