<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Post :post="post"/>
    <Comments :comments="comments"/>
    <NewComment/>
  </div>
</template>

<script>
  import Post from "@/components/Blog/Post";
  import NewComment from "@/components/Comments/NewComment";
  import Comments from "@/components/Comments/Comments";

  export default {
    name: "index",
    components: {
      Post,
      NewComment,
      Comments
    },
    data() {
      return {
        post: {
          id: 1,
          title: '1 post',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
          img: '//via.placeholder.com/350x150'
        },
        comments: [
          {
            name: 'Alex',
            text: 'Lorem ippppp'
          },
          {
            name: 'Alex2',
            text: 'Lorem ippppp'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .post {
    max-width: 900px;
    margin: 0 auto;
  }

  .post-header {
    text-align: center;
    margin-bottom: 30px;

    img {
      max-width: 400px;
      margin-bottom: 16px;
    }

    p {
      color: #999999;
    }
  }

  .post-body {
    text-align: left;
  }

</style>
