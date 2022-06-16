<template>
    <div>
        <div>
           <Header/>
             
             <main>
                <router-view></router-view>
                <!-- <Home/> -->
             </main>
        </div>
        
    </div>
</template>

<script>
import Header from "./Header.vue";
import Contact from "./Pages/Contact.vue";
import Home from "./Pages/Home.vue";
    export default{
        name:'App',
        components:{
            Header,
            Home,
            Contact
        }
    }
</script>
