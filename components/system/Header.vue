<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <div class="logo">
            <nuxt-link to="/">
              Blog
            </nuxt-link>
          </div>
          <ul class="navbar-list">
            <li class="navbar-item" v-for="link in links" :key="link.title">
              <nuxt-link class="navbar-link" :title="link.title" :to="link.url">{{ link.title }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        links: [
          {
            title: 'Home',
            url: '/'
          },
          {
            title: 'About',
            url: '/about'
          },
          {
            title: 'Blog',
            url: '/blog'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .navbar-item {
    .nuxt-link-exact-active {
      color: #4165de;
    }
  }
</style>
