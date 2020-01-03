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
      async onSubmit(post) {
        // console.log('Post added!');
        // console.log(post);
        await this.$store.dispatch('addPost', post);
        this.$router.push('/admin');
      }
    }
  }
</script>

<style scoped>

</style>
