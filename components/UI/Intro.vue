<template>
  <section class="intro">
    <div class="container">
      <h1>{{title}}</h1>
      <slot/>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Intro",
    props: {
      title: {
        type: String,
        requried: true
      }
    }
  }
</script>

<style lang="scss">
  .intro {
    width: 100%;
    margin: 30px 0;
    text-align: center;
    color: #ffffff;
    background-color: #4b40e3;

    h1 {
      font-size: 26px;
      color: currentColor;
    }
  }

</style>
