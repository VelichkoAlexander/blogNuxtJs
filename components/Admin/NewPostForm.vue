<template>
  <div class="new-post">
    <div class="container">
      <form @submit.prevent>
        <AppInput v-model="post.title">Title:</AppInput>
        <AppInput v-model="post.desc">Description:</AppInput>
        <AppInput v-model="post.img">Img Link:</AppInput>
        <AppTextArea v-model="post.content">Content:</AppTextArea>
        <!--        Buttons-->
        <div class="controls">
          <AppButton class="btnDanger" @click="onCancel">Cancel</AppButton>
          <AppButton @click="onSave"> Save</AppButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      postEdit: {
        type: Object,
        required: false
      }
    },
    data() {
      return {
        post: this.postEdit ? {...this.postEdit} : {
          title: '',
          desc: '',
          img: '',
          content: ''
        }
      }
    },
    methods: {
      onCancel() {
        this.$router.push('/admin');
      },
      onSave() {
        this.$emit('submit', this.post);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .controls {
    text-align: center;
    margin: 20px 0;
  }
</style>
