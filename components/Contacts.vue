<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">Contact me!</h2>
      <!--message-->
      <Message v-if="message" :message="message"/>
      <form @submit.prevent="onSubmit" class="contact-form">
        <!--name-->
        <AppInput v-model="user.name">Name:</AppInput>
        <!--email-->
        <AppInput v-model="user.email">Email:</AppInput>
        <!--textarea-->
        <AppTextArea v-model="user.text">Text:</AppTextArea>
        <!--buttons-->
        <div class="controls">
          <AppButton class="btnWhite">
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
        message: null,
        user: {
          name: '',
          email: '',
          text: ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.message = "Submitted";
        console.log(this.user);
      }
    }
  }
</script>

<style lang="scss">

  .contact {
    text-align: center;
    background-color: #4f68f4;
    color: #ffffff;

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
