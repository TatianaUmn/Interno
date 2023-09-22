<template>
    <div :class="[$style.articles, $style.center]">
      <!--  -->
      <!-- заголовок -->
      <div :class="$style.heading">
        <div :class="$style.heading__title">Articles & News</div>
        <div :class="$style.heading__text">
          It is a long established fact that a reader will be distracted by the of
          readable content of a page when lookings at its layouts the points of
          using.
        </div>
      </div>
  
      <!-- статьи и новости -->
      <div :class="$style.content">
        <div
          v-for="(article, index) in articles"
          :key="index"
          :class="[(index % 2) ? $style.item__type2 : $style.item__type1, $style.item]"
        >
          <div :class="$style.item__image">
            <img :src="article.img" alt="foto" :class="$style.item__image_img" />
            <button :class="$style.item__image_text">
              {{ article.buttonText }}
            </button>
          </div>
          <div :class="$style.item__title">{{ article.title }}</div>
          <div :class="$style.item__subscribe">
            <div :class="$style.item__subscribe_date">{{ article.date }}</div>
            <a href="#"> <img :src="choisButton(index)" alt="foto" /> </a>
          </div>
        </div>
      </div>
  
      <!--  -->
    </div>
  </template>
  
  <script>
  export default {
    name: "MainArticles",
  
    data() {
      return {
        articles: [
          {
            img: "./img/main/mainArt1.png",
            buttonText: "Kitchan Design",
            title: "LetТs Get Solution For Building Construction Work",
            date: "26 December,2022",
          },
          {
            img: "./img/main/mainArt2.png",
            buttonText: "Living Design",
            title: "Low Cost Latest Invented Interior Designing Ideas.",
            date: "22 December,2022",
          },
          {
            img: "./img/main/mainArt3.png",
            buttonText: "Interior Design",
            title: "Best For Any Office & Business Interior Solution",
            date: "25 December,2022",
          },
        ],
          butonUrl: "",
      };
    },
  
    computed: {},
  
    mounted() {},
  
    methods: {
      choisButton(index) {
        if (index % 2) {
          return (this.butonUrl = "/img/roundButton2.svg");
        } else {
          return (this.butonUrl = "/img/roundButton.svg");
        }
      },
    },
  };
  </script>
  
  <style lang="scss" module>
  .center {
    padding-right: calc(50% - 600px);
    padding-left: calc(50% - 600px);
  }
  
  .articles {
    margin-top: 96px;
    //   width: 470px;
  }
  
  .heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    gap: 12px;
  
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
      max-width: 811px;
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
  
  .content {
    margin-top: 52px;
    display: flex;
    flex-direction: row;
    gap: 27px;
  }
  
  .item {
    display: flex;
    flex-direction: column;
    gap: 21px;
  
    max-width: 382px;
    max-height: 550px;
    border-radius: 62px;
    border: 1px solid #e7e7e7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    box-sizing: border-box;
  
    &__type1 {
      background: white;
    }
  
    &__type2 {
      background: #f4f0ec;
    }
  
    &__image {
      position: relative;
  
      &_img {
        margin: 21px 21px 0 21px;
      }
  
      &_text {
        position: absolute;
  
        left: 36px;
        top: 255px;
  
        padding: 4px 8px;
        width: 124px;
        height: 41px;
        box-sizing: border-box;
        border: none;
        border-radius: 8px 8px 8px 0px;
        background: #fff;
        color: #4d5053;
  
        font-family: Jost;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.16px;
      }
    }
  
    &__title {
      margin-left: 21px;
      max-width: 284px;
      color: #292f36;
      font-family: DM Serif Display;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 0.5px;
    }
  
    &__subscribe {
      margin-left: 21px;
      margin-right: 21px;
      margin-bottom: 30px;
  
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-content: center;
      flex-wrap: wrap;
      align-items: center;
  
      &_date {
        color: #4d5053;
        font-family: Jost;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.16px;
        text-transform: capitalize;
      }
    }
  }
  </style>