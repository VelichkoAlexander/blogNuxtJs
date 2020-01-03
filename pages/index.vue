<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Promo/>
    <Intro title="My last posts: "/>
    <!--    posts    -->
    <PostList :posts="postLoaded"/>
    <Contacts/>
  </div>
</template>

<script>
  import Promo from "../components/Promo";
  import Intro from "../components/UI/Intro";
  import PostList from "../components/Blog/PostList";
  import Contacts from "../components/Contacts";

  export default {
    components: {
      Promo,
      Intro,
      PostList,
      Contacts
    },
    data() {
      return {
      }
    },
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
