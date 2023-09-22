import Vue from 'vue'
import VueRouter from 'vue-router'


import MainPage from '../components/pages/MainPage';
import BlogPage from '../components/pages/BlogPage.vue';
import BlogDetails from '../components/blocks/BlogDetails.vue';
import ProjectPage from '../components/pages/ProjectPage.vue';
import ProjectDetails from '../components/blocks/ProjectDetails.vue';
import NotFound from '../components/pages/NotFound.vue';

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '',
            component: MainPage
        },
        {
            path: '/Project',
            component: ProjectPage
        },
        {
            path: '/Project/ProjectDetails/:id',
            component: ProjectDetails
        },
        {
            path: '/Blog',
            component: BlogPage
        },
        {
            path: '/Blog/:page',
            component: BlogPage
        },
        {
            path: '/Blog/BlogDetails/:id',
            component: BlogDetails
        },
        {
            path: '/NotFound',
            component: NotFound
        },
        {
            path: "*",
            component: NotFound
        }
    ],
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    mode: 'history',
})

//Vue.use(VueRouter)

/*const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ //'../views/AboutView.vue')
  //}
//]

//const router = new VueRouter({
  //mode: 'history',
  //base: process.env.BASE_URL,
  //routes
//})

//export default router
// */