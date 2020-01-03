<template>
  <NewPostForm
    @submit="onSubmit"
    :postEdit="post"
  />
</template>

<script>
  import NewPostForm from '@/components/Admin/NewPostForm';

  export default {
    name: "index",
    components: {NewPostForm},
    layout: 'admin',
    data() {
      return {
        post:
          {
            id: 1,
            title: '1 post',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            img: '//via.placeholder.com/350x150'
          }
      }
    },
    methods: {
      onSubmit(post) {
        console.log('Post editing!');
        console.log(post);
      }
    }
  }
</script>

<style scoped>

</style>
