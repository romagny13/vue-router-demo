<template>
<div>
    <h1>Home</h1>
     <button @click="goPosts">Go posts</button>
     <button @click="goPostDetail">Go post id 10</button>
</div>
</template>

<script>
export default {
    methods:{
        goPosts(){
            this.$router.push({ name: 'postList'});
        },
         goPostDetail(){
           // this.$router.push('/posts/10');
           this.$router.push({path:'/posts/50',query:{ q:'mysearch' }, hash:'#section1'});
          // this.$router.push({ name:'postDetail', params:{id:50}, query:{ q:'mysearch' }, hash:'#section1'});
        }
    }
}
</script>