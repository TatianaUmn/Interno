<template>
    <div :class="$style.box">
      <!--  -->
  
      <div :class="[$style.center, $style.content]">
        <div :class="$style.description">
          <p :class="$style.description__title">404</p>
          <p :class="$style.description__text">
            We are sorry, but the page you requested was not found
          </p>
          <router-link to="/">
            <button :class="$style.description__button">
              <span>Back To Home</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
              >
                <path
                  d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887"
                  stroke="#CDA274"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </router-link>
        </div>
  
        <img src="/img/not_found.jpg" alt="" :class="$style.image" />
      </div>
  
      <!--  -->
    </div>
  </template>
  
  <script>
  export default {
    name: "NotFound",
  
    data() {
      return {};
    },
  
    mounted() {},
  
    methods: {},
  };
  </script>
  
  <style lang="scss" module>
  .center {
    padding-right: calc(50% - 960px);
    padding-left: calc(50% - 600px);
  }
  .box {
    margin-top: 40px;
    margin-bottom: 50px;
  }
  
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  
  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
  
  //   gap: 15px;
  
    &__title {
      color: #cda274;
      font-family: DM Serif Display;
      font-size: 250px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
    }
    &__text {
      color: #292f36;
      font-family: DM Serif Display;
      font-size: 35px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.35px;
  
      max-width: 570px;
    }
  
    &__button {
      border-radius: 18px;
      background: #292f36;
      box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
  
      display: flex;
      flex-direction: row;
      gap: 15px;
      justify-content: center;
      align-items: center;
  
      padding: 26px 54px;
      color: #fff;
      text-align: center;
      font-family: Jost;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 125%;
      letter-spacing: 0.36px;
  
      margin-top: 40px;
    }
  }
  
  .image {
    width: 913px;
    border-radius: 0 0 0 35%;
  }
  </style>