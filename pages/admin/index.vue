<template>
  <!--    posts    -->
  <PostList
    :posts="postLoaded"
    :admin="true"
  />
</template>

<script>
  export default {
    layout: 'admin',
    computed: {
      postLoaded() {
        return this.$store.getters.getPostLoaded;
      }
    }
  }
</script>

<style>

</style>
