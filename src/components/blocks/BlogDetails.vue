<template>
    <div :class="$style.box">
      <!--  -->
      <div :class="$style.banner"></div>
      <div v-for="article in articleShow" :key="article.id">
        <div :class="$style.center">
          <div :class="$style.articlesDetails">
            <p :class="$style.title">{{ article.title }}</p>
            <img :src="article.imgDetails1" alt="foto" />
            <p :class="$style.text">{{ article.paragraph1 }}</p>
            <p :class="$style.text">{{ article.paragraph2 }}</p>
            <img src="/img/articles/Quotes.png" alt="foto" />
            <p :class="$style.title">{{ article.title2 }}</p>
            <p :class="$style.text">{{ article.paragraph3 }}</p>
            <ol>
              <li>
                <span :class="$style.text"> {{ article.paragraph4 }}</span>
              </li>
              <li>
                <span :class="$style.text"> {{ article.paragraph5 }}</span>
              </li>
              <li>
                <span :class="$style.text"> {{ article.paragraph6 }}</span>
              </li>
            </ol>
            <img :src="article.imgDetails2" alt="foto" />
            <p :class="$style.text">{{ article.paragraph7 }}</p>
          </div>
        </div>
      </div>
      <!--  -->
    </div>
  </template>
  
  <script>
  import { mapState } from "vuex";
  export default {
    name: "BlogDetails",
  
    data() {
      return {};
    },
  
    mounted() {},
  
    methods: {},
  
    computed: {
      ...mapState(["articles"]),
  
      articleShow() {
        console.log(this.$route.params.id);
  
        return this.articles.filter(
          (article) => article.id === Number(this.$route.params.id)
        );
      },
    },
  };
  </script>
  
  <style lang="scss" module>
  .center {
    padding-right: calc(50% - 600px);
    padding-left: calc(50% - 600px);
  }
  .box {
    margin-top: 45px;
    margin-bottom: 100px;
  }
  
  .banner {
    background-image: url(/public/img/articles/articles_banner.png);
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
  
  .articlesDetails {
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
  }
  .title {
    width: 700px;
    color: #292f36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
  }
  
  .text {
    color: #4d5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
  }
  
  ol {
    list-style-position: inside;
  }
  li {
    color: #cda274;
    font-family: DM Serif Display;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; 
    letter-spacing: 0.4px;
  }
  </style>