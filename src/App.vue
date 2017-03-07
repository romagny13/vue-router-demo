<template>
<div>
  <nav>
    <router-link to="/" active-class="active" exact>Home</router-link>
    <router-link to="/posts" active-class="active" exact>Post list</router-link>
    <router-link :to="{path:'/posts/10', query:{q:'mysearch'},hash:'#section1'}" active-class="active" exact>Post detail</router-link>
    <router-link :to="{name:'postList'}">Post list (named)</router-link>
    <router-link :to="{name:'postDetail', params:{id: 20}, query:{q:'mysearch'},hash:'#section1'}">Post detail (named)</router-link>
  </nav>
  <div class="container">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style>
.active{
  color:orange;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
