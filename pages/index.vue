<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Promo/>
    <Intro title="My last posts: "/>
    <!--    posts    -->
    <PostList :posts="posts"/>
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
        posts: [
          {
            id: 1,
            title: '1 post',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            img: '//via.placeholder.com/350x150'
          },
          {
            id: 2,
            title: '3 post',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            img: '//via.placeholder.com/350x150'
          },
          {
            id: 3,
            title: '3 post',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            img: '//via.placeholder.com/350x150'
          },

        ]
      }
    }
  }
</script>

<style>

</style>
