import  Vue from "vue";
import  VueRouter from "vue-router";

Vue.use(VueRouter)
import Contact from "./components/Pages/Contact.vue";
import Home from "./components/Pages/Home.vue";
import PostDetail from "./components/Pages/PostDetail.vue";

const router=new VueRouter({
    mode:'history',
    linkActiveClass:'active',
    routes:[
        {path:'/', component:Home},
        {path:'/contact', component:Contact},
        {path:'/posts/:slug', component: PostDetail, name: 'post-detail'},
        {path:'*', component:Home}
    ]
});
export default router;