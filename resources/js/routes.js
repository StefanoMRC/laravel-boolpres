import  Vue from "vue";
import  VueRouter from "vue-router";

Vue.use(VueRouter)
import Contact from "./components/Pages/Contact.vue";
import Home from "./components/Pages/Home.vue";

const router=new VueRouter({
    mode:'history',
    routes:[
        {path:'/', component:Home},
        {path:'/contact', component:Contact},
        {path:'*', component:Home}
    ]
});
export default router;