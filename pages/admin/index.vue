<template>
  <!--    posts    -->
  <PostList :posts="posts"/>
</template>

<script>
  export default {
    layout: 'admin',
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
