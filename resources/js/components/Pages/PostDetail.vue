<template>
    <div>
        <h1>post: {{ post.title }}</h1>



        <p>{{ post.content }}</p>




    </div>
</template>

<script>
import axios from 'axios';

    export default {
        name: 'PostDetail',
        data() {
            return {
                post: [],
                
            }
        },

        methods: {
            getPost() {
                axios.get(`http://127.0.0.1:8000/api/posts/${ this.$route.params.slug }`)
                    .then((res) => {
                        console.log(res.data);
                         console.log(res);
                        this.post = res.data;
                    })
            }
        },
        mounted() {
            this.getPost();
            console.log( this.$routes);
        }
    }
</script>