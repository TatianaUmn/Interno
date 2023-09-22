<template>
    <div :class="[$style.follow, $style.center]">
      <!--  -->
      <div :class="$style.heading">
        <p :class="$style.heading__title">Follow Our Projects</p>
        <p :class="$style.heading__text">
          It is a long established fact that a reader will be distracted by the of
          readable content of page lookings at its layouts points.
        </p>
      </div>
  
      <article :class="$style.article">
        <div v-for="project in projects" :key="project.id" :class="$style.cart">
          <img :src="project.img" alt="foto" :class="$style.cart__img" />
          <div :class="$style.cart__bottom">
            <div :class="$style.cart__description">
              <p :class="$style.cart__description_title">{{ project.title }}</p>
              <p :class="$style.cart__description_text">
                {{ project.directory }}
              </p>
            </div>
            <a href="#">
              <img src="/img/roundButton.svg" alt="foto">
            </a>
          </div>
        </div>
      </article>
  
      <!--  -->
    </div>
  </template>
  
  <script>
  export default {
    name: "MainFollow",
  
    data() {
      return {
        projects: [
          {
            img: "./img/main/follow1.png",
            title: "Modern Kitchan",
            directory: "Decor / Artchitecture",
          },
          {
            img: "./img/main/follow2.png",
            title: "Modern Kitchan",
            directory: "Decor / Artchitecture",
          },
          {
            img: "./img/main/follow3.png",
            title: "Modern Kitchan",
            directory: "Decor / Artchitecture",
          },
          {
            img: "./img/main/follow4.png",
            title: "Modern Kitchan",
            directory: "Decor / Artchitecture",
          },
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
  
  .follow {
    margin-top: 96px;
  }
  
  .heading {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    gap: 8px;
  
    &__title {
      color: #292f36;
      text-align: center;
      font-family: DM Serif Display;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 1px;
    }
  
    &__text {
      width: 737px;
      color: #4d5053;
      text-align: center;
      font-family: Jost;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.22px;
    }
  }
  
  .article {
    margin-top: 37px; // 93-56
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  .cart {
    max-width: 548px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  
    &__img {
      margin-top: 56px;
    }
  
    &__bottom {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  
    &__description {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: flex-start;
      gap: 5px;
  
      &_title {
        color: #292f36;
        font-family: DM Serif Display;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0.5px;
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