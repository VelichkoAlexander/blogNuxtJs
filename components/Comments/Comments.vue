<template>
  <div class="comments">
    <div class="container">
      <div v-if="comments" class="comment" v-for="comment in comments" :key="comment.name">
        <p class="name">{{comment.name}}</p>
        <p class="text">{{comment.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "comments",
      props: {
          comments: {
            type: Array,
            default: null
          }
      }
    }
</script>

<style lang="scss">
  .comments {
    padding: 20px;
    margin: 30px auto;
    background-color: #fff;
    text-align: center;

    .name {
      margin-bottom: 12px;
      font-size: 24px;
      color: #5c4de7;
    }
    .comment {
      display: block;
      width: 600px;
    }
  }

</style>
