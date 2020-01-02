<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="My posts: "/>
    <!--    posts    -->
    <PostList :posts="posts"/>
  </div>
</template>

<script>
  export default {
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
