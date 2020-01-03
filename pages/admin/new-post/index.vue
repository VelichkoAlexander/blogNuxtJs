<template>
  <NewPostForm @submit="onSubmit"/>
</template>

<script>
  import NewPostForm from '@/components/Admin/NewPostForm';

  export default {
    name: "index",
    components: {NewPostForm},
    layout: 'admin',
    methods: {
      onSubmit(post) {
        console.log('Post added!');
        console.log(post);
      }
    }
  }
</script>

<style scoped>

</style>
