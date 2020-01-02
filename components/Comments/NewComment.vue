<template>
  <section class="new-comment">
    <div class="container">
      <h2 class="title">New Comment</h2>
      <form @submit.prevent="onSubmit" class="contact-form">
        <!--name-->
        <AppInput v-model="comment.name">Name:</AppInput>
        <!--        textarea-->
        <AppTextArea v-model="comment.text">Text:</AppTextArea>
        <div class="controls">
          <AppButton>
            Submit!
          </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>


  export default {
    name: "Contacts",
    data() {
      return {
        comment: {
          name: '',
          text: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log(this.comment);
      }
    }
  }
</script>

<style lang="scss">

  .new-comment {
    text-align: center;

    .contact-form {
      max-width: 600px;
      margin: 30px auto;
    }

    .title {
      color: currentColor;
    }

    .input {
      color: #000;
    }

    .controls {
      margin: 30px 0;
    }
  }

</style>
