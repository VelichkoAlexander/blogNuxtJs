<template>
  <section class="not-found">
    <div class="container">
      <div class="not-fount__wrapper">
        <p class="title">Page not found</p>
        <nuxt-link to="/">Back to main page</nuxt-link>
      </div>
    </div>

  </section>
</template>

<script>
  export default {
    name: "error"
  }
</script>

<style lang="scss">
  .not-fount__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 80vh;
  }

</style>
