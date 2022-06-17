<template>
    <div>
        <div class="container">
            <div class="card my-4" v-for="post in posts" :key="post.id">
                <h5 class="card-header">{{post.title}}</h5>
                <div class="card-body">
                    <h5 class="card-title">{{post.content}}</h5>
                    <div class="card-text">
                        <h4>Category:</h4>
                        <span class="badge badge-pill"
                            :class="`badge-${post.category.color}`">{{post.category.name}}</span>

                    </div>
                    <div class="card-text" v-if="post.tags.length">
                        <h4>Tags:</h4>
                        <span class="badge badge-pill" :style="`background-color:${tag.color}`" v-for="tag in post.tags"
                            :key="tag.id">{{tag.name}}</span>
                    </div>

                     <router-link :to="{ name: 'post-detail', params: { slug: post.slug } }" class="btn btn-primary">Info</router-link>
                </div>
            </div>
            <div class="d-flex justify-content-center">
               <Pagination :pagination="pagination" @on-page-change="getPosts" /> 
            </div>
            
        </div>

        
    </div>
</template>

<script>
    import axios from "axios";
    import Pagination from "../Pagination.vue";
    export default {
        name: 'Post',
         components: {
            
            Pagination
        },
        data() {
            return {
                posts: [],
            }
        },
        methods: {
            getPosts(page = 1) {
                axios.get("http://127.0.0.1:8000/api/posts?page=" + page)
                    .then((res) => {
                        console.log(res.data.posts.data);
                        const {
                            data,
                            current_page,
                            last_page
                        } = res.data.posts;
                        console.log(data);
                        console.log(current_page);
                        console.log(last_page);
                        this.posts = data;
                        this.pagination = {
                            lastPage: last_page,
                            currentPage: current_page
                        }
                    }).then(() => {
                        console.log('terminato il caricamento dei posts')
                        this.isLoading = false;
                    })
            }
        },
        mounted() {
            this.getPosts();
        }
    }
    

</script>

<style scoped>

</style>
