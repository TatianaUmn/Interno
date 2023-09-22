<template>
    <div :class="$style.box">
      <!--  -->
      <BlogBanner />
      <!-- Latest Post -->
      <div :class="$style.center">
        <div :class="$style.latestPostBox">
          <img
            :src="articles[0].img"
            :class="$style.latestPostBox__img"
            alt="foto"
          />
          <!--  -->
          <div :class="$style.latestPostBox__textPosition">
            <p :class="$style.latestPostBox__title">{{ articles[0].title }}</p>
            <p :class="$style.latestPostBox__text">
              {{ articles[0].paragraph1 }}
            </p>
            <router-link
              :class="$style.latestPostBox__bottom"
              :to="`/Blog/BlogDetails/${articles[0].id}`"
            >
              <p :class="$style.latestPostBox__bottom_date">
                {{ articles[0].date }}
              </p>
              <img
                src="/img/roundButton.svg"
                :class="$style.itemBox__bottom_img"
                alt="foto"
              />
            </router-link>
            <!--  -->
          </div>
        </div>
      </div>
  
      <!-- Articles & News -->
      <div :class="[$style.content, $style.center]">
        <p :class="$style.mainTitle">Articles & News</p>
        <div :class="$style.contentItems">
          <div
            v-for="(article, index) in currentProductsList"
            :key="index"
            :class="$style.itemBox"
          >
            <img :src="article.img" :class="$style.itemBox__img" alt="foto" />
            <p :class="$style.itemBox__title">{{ article.title }}</p>
            <router-link
              :to="`/Blog/BlogDetails/${article.id}`"
              :class="$style.itemBox__bottom"
            >
              <p :class="$style.itemBox__bottom_text">{{ article.date }}</p>
              <img
                src="/img/roundButton.svg"
                :class="$style.itemBox__bottom_img"
                alt="foto"
              />
            </router-link>
          </div>
        </div>
      </div>
      <!-- фильтрация статей по количеству на странице -->
      <div :class="[$style.numPage, $style.center]">
        <router-link
          v-for="page in Math.ceil(articles.length / 6)"
          :to="`/Blog/${page}`"
          exact
          :active-class="$style.numPage__activPage"
          :key="page"
          :class="$style.numPage__each"
          tag="button"
        >
          0{{ page }}
        </router-link>
      </div>
      <!--  -->
    </div>
  </template>
  
  <script>
  import { mapState } from "vuex";
  import BlogBanner from "../blocks/BlogBanner.vue";
  
  export default {
    name: "BlogPage",
    data() {
      return {
        currentPage: 1,
        itemPerPage: 6,
      };
    },
    mounted() {},
    methods: {},
    watch: {
      $route(to, from) {
        // обрабатываем изменение параметров маршрута...
        const { page } = this.$route.params;
        if (page) this.currentPage = page;
        console.log(to, from);
      },
    },
    computed: {
      ...mapState(["articles"]),
  
      currentProductsList() {
        const { currentPage, itemPerPage } = this;
        const startIndex = (currentPage - 1) * itemPerPage;
        const endIndex = startIndex + itemPerPage;
        return this.articles.slice(startIndex, endIndex);
      },
    },
    components: { BlogBanner },
  };
  </script>
  
  <style lang="scss" module>
  .center {
    padding-right: calc(50% - 600px);
    padding-left: calc(50% - 600px);
  }
  .box {
    margin-top: 45px;
    margin-bottom: 200px;
  }
  
  .latestPostBox {
    border-radius: 62px;
    border: 1px solid #e7e7e7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 65px;
    width: 1200px;
    margin-top: 200px;
  
    &__img {
      width: 569px;
      border-radius: 62px;
      margin: 22px 0 22px 22px;
    }
  
    &__textPosition {
      margin-top: 22px;
      margin-right: 40px;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
    &__title {
      color: #292f36;
      font-family: DM Serif Display;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 0.5px;
      width: 469px;
    }
    &__text {
      color: #4d5053;
      font-family: Jost;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.22px;
      width: 469px;
    }
  
    &__bottom {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
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
  
  .mainTitle {
    margin-top: 156px;
    margin-bottom: 30px;
    color: #292f36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
  }
  
  .contentItems {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
  }
  
  .itemBox {
    border-radius: 62px;
    border: 1px solid #e7e7e7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    width: 380px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 20px;
  
    &__img {
      border-radius: 62px 62px 0 0;
      margin-left: 19px;
      margin-top: 19px;
      max-width: 340px;
    }
    &__title {
      color: #292f36;
      font-family: DM Serif Display;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 0.5px;
      max-width: 290px;
      margin-left: 19px;
    }
  
    &__bottom {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 27px;
      margin-left: 19px;
      margin-right: 19px;
  
      &_text {
        color: #4d5053;
        font-family: Jost;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.16px;
        text-transform: capitalize;
      }
      &_img {
        width: 50px;
        height: 50px;
      }
    }
  }
  
  .numPage {
    margin-top: 51px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
  
    &__each {
      color: #292f36;
      font-family: Jost;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
      text-transform: capitalize;
  
      border: 1px solid #cda274;
      background: white;
      width: 52px;
      height: 52px;
      border-radius: 50%;
      &:hover {
        background: #cda274;
      }
    }
    &__activPage {
      background: #cda274;
    }
  }
  </style>