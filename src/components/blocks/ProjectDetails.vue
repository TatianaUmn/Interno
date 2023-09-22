<template>
    <div :class="$style.box">
      <!--  -->
      <div :class="$style.banner"></div>
  
      <div :class="[$style.center]">
        <div v-for="project in projectShow" :key="project.id">
          <div :class="[$style.projectDetails]">
            <p :class="$style.title">{{ project.title }}</p>
            <p :class="$style.text">{{ project.text }}</p>
          </div>
  
          <div :class="$style.sliderBox">
            <div
              :class="$style.slider"
              :style="{ 'margin-left': '-' + 100 * currentSliodIndex + '%' }"
            >
              <div v-for="(img, index) in project.slider" :key="index">
                <img :src="img.img" alt="foto" />
              </div>
            </div>
          </div>
          <!-- </div> -->
  
          <div :class="$style.slider__button">
            <img
              :class="$style.slider__buttonSize"
              src="/img/roundButtonInvrt.svg"
              alt="foto"
              @click="prevSlide"
            />
            <img
              :class="$style.slider__buttonSize"
              src="/img/roundButton.svg"
              alt="foto"
              @click="nextSlide"
            />
          </div>
        </div>
      </div>
  
      <!--  -->
    </div>
  </template>
  
  <script>
  import { mapState } from "vuex";
  export default {
    name: "ProjectDetails",
  
    data() {
      return {
        currentSliodIndex: 0,
        curretnParams: 0,
        curretntId: 0,
      };
    },
  
    mounted() {},
  
    methods: {
      prevSlide() {
        if (this.currentSliodIndex > 0) {
          this.currentSliodIndex--;
          console.log(this.currentSliodIndex);
        }
      },
      nextSlide() {
        if (this.currentSliodIndex >= 2) {
          this.currentSliodIndex = 0;
        } else {
          this.currentSliodIndex++;
        }
        console.log(this.currentSliodIndex);
      },
    },
  
    computed: {
      ...mapState(["projects", "curretntIndex"]),
  
      projectShow() {
        console.log(this.$route.params.id);
  
        return this.projects.filter(
          (project) => project.id === Number(this.$route.params.id)
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
    background-image: url(/public/img/project/projectBanner.png);
    background-size: cover;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height: 356px;
  }
  
  .projectDetails {
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .title {
    color: #292f36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
    text-align: left;
  }
  
  .text {
    color: #4d5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
    max-width: 660px;
  
    margin-bottom: 100px;
    margin-top: 15px;
    text-align: left;
  }
  
  .sliderBox {
    display: flex;
    max-width: 1197px;
    overflow: hidden;
  }
  .slider {
    display: flex;
  
    &__button {
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 20px;
    }
  
    &__buttonSize {
      width: 40px;
      height: 40px;
    }
  }
  </style>