<template>
    <div :class="$style.box">
      <!--  -->
      <ProjectBanner />
  
      <!-- кнопки -->
      <div :class="$style.center">
        <div :class="$style.buttons">
          <div
            v-for="button in buttons"
            :key="button.id"
            :class="
              curretntIndex === button.id ? $style.button__active : $style.button
            "
            @click="CHECK_BUTTON_TAG(button.name), ACTIVE_BUTTON(button.id)"
          >
            {{ button.name }}
          </div>
        </div>
      </div>
  
      <!-- проекты -->
      <!-- внешняя обертка на 2 столбца -->
      <div :class="[$style.center, $style.projects]">
        <!-- обертка для распределения статей внутри 1-ого столбца -->
        <div :class="$style.projects__sub">
          <div v-for="(project, index) in selectedTag" :key="project.id">
            <div v-if="!(index % 2)" :class="$style.projects__sub_content">
              <img :src="project.img" alt="foto" />
              <router-link
                :class="$style.projects__position_footer"
                :to="`/Project/ProjectDetails/${project.id}`"
              >
                <div :class="$style.projects__position__footerText">
                  <p :class="$style.projects__sub_title">{{ project.title }}</p>
                  <p :class="$style.projects__sub_section">
                    {{ project.section }}
                  </p>
                </div>
                <img src="/img/roundButton.svg" alt="foto" />
              </router-link>
            </div>
          </div>
        </div>
  
        <!-- обертка для распределения статей внутри 2-ого столбца -->
        <div :class="$style.projects__sub">
          <div v-for="(project, index) in selectedTag" :key="project.id">
            <div v-if="index % 2" :class="$style.projects__sub_content">
              <img :src="project.img" alt="foto" />
              <router-link
                :class="$style.projects__position_footer"
                :to="`/Project/ProjectDetails/${project.id}`"
                >
                <div :class="$style.projects__position__footerText">
                  <p :class="$style.projects__sub_title">{{ project.title }}</p>
                  <p :class="$style.projects__sub_section">
                    {{ project.section }}
                  </p>
                </div>
                <img src="/img/roundButton.svg" alt="foto" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
  
      <!-- нижнии кнопки -->
      <div :class="$style.numberPage">
        <router-link
          to="/Project"
          exact
          :active-class="$style.numberPage__activPage"
          tag="button"
          :class="$style.numberPage__buttons"
          >01
        </router-link>
  
        <router-link
          to="/Project/2"
          exact
          :active-class="$style.numberPage__activPage"
          tag="button"
          :class="$style.numberPage__buttons"
          >02
        </router-link>
        <router-link
          to="/Project/3"
          exact
          :active-class="$style.numberPage__activPage"
          tag="button"
          :class="$style.numberPage__buttons"
          >03
        </router-link>
        <router-link
          to="/Project/4"
          exact
          :active-class="$style.numberPage__activPage"
        >
          <button :class="$style.numberPage__buttons">
            <svg :class="$style.numberPage__strelka" viewBox="0 0 5 9">
              <path
                d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z"
              ></path>
            </svg>
          </button>
        </router-link>
      </div>
  
      <!--  -->
    </div>
  </template>
  
  <script>
  import { mapGetters, mapMutations, mapState } from "vuex";
  import ProjectBanner from "../blocks/ProjectBanner.vue";
  
  export default {
    components: { ProjectBanner },
    name: "BlogPage",
  
    data() {
      return {};
    },
  
    mounted() {},
    methods: {
      ...mapMutations(["CHECK_BUTTON_TAG", "ACTIVE_BUTTON"]),
    },
  
    computed: {
      ...mapState(["projects", "buttons", "currentButtonTag", "curretntIndex"]),
      ...mapGetters(["selectedTag"]),
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
    margin-bottom: 200px;
  }
  
  .buttons {
    margin-top: 200px;
    display: flex;
    justify-content: center;
    gap: 10px;
  
    &__activ {
      background: #cda274;
    }
  }
  
  .button {
    display: flex;
    padding: 26px 66px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 18px;
    border: 1px solid #cda274;
    background: white;
    //   background: #cda274;
    box-sizing: border-box;
  
    color: #292f36;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%; /* 22.5px */
    letter-spacing: 0.36px;
  
    &:hover {
      background: #cda274;
      color: white;
    }
  
    &__active {
      display: flex;
      padding: 26px 66px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 18px;
      border: 1px solid #cda274;
  
      background: #cda274;
      box-sizing: border-box;
  
      color: white;
      text-align: center;
      font-family: Jost;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 125%; /* 22.5px */
      letter-spacing: 0.36px;
    }
  }
  
  .projects {
    margin-top: 61px;
  
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  
    &__sub {
      display: flex;
      flex-direction: column;
  
      &_content {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 40px;
      }
  
      &_title {
        color: #292f36;
        font-family: DM Serif Display;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0.5px;
      }
      &_section {
        color: #4d5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
      }
    }
  
    &__position_footer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    &__position__footerText {
      display: flex;
      flex-direction: column;
    }
  }
  .numberPage {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    margin-top: 61px;
  
    &__buttons {
      border: 1px solid #cda274;
      background: white;
      width: 52px;
      height: 52px;
      border-radius: 50%;
  
      color: #292f36;
      font-family: Jost;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
  
      &:hover {
        background: #cda274;
      }
    }
    &__strelka {
      margin: 14px 19px;
      width: 18px;
      height: 21px;
      cursor: pointer;
    }
  
    &__activPage {
      background: #cda274;
      border: 1px solid #cda274;
      width: 52px;
      height: 52px;
      border-radius: 50%;
    }
  }
  </style>
  
  <!-- простая смена цвета у кнопки -->
  <!-- <div :class="$style.buttons">
    <div
      v-for="(button, index) in buttons"
      :key="index"
      :class="
        curretntIndexTwo === index ? $style.button__active : $style.button
      "   
      @click="changeColor(index)"    
    >
      {{ button.name }}
    </div>
  </div>
  
  data:
  curretntIndexTwo: null,
  
  methids
  
  changeColor(index) {
        this.curretntIndexTwo = index
      }, -->
  
  <!-- проекты -->
  <!-- <div :class="[$style.center, $style.projects]">
        <div v-for="project in selectedTag" :key="project.id">
          <div :class="$style.projects__sub_content">
            <img :src="project.img" alt="foto" />
            <p :class="$style.projects__sub_title">{{ project.title }}</p>
            <p :class="$style.projects__sub_section">{{ project.section }}</p>
          </div>
        </div>
      </div> -->