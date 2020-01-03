<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="My posts: "/>
    <!--    posts    -->
    <PostList :posts="postLoaded"/>
  </div>
</template>

<script>
  export default {
    computed: {
      postLoaded() {
        console.log(this.$store.getters.getPostLoaded);
        return this.$store.getters.getPostLoaded;
      }
    }
  }
</script>

<style>

</style>
