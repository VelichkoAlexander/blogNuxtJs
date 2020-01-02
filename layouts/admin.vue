<template>
  <div class="wrapper">
    <Header/>
    <div class="wrapper-content wrapper-content--fixed">
      <Intro title="Admin page">
        <nuxt-link to="" class="link linkWhite">Admin</nuxt-link>
      </Intro>
      <nuxt/>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/system/Header.vue'

  export default {
    components: {
      Header
    }
  }

</script>

<style>

</style>
