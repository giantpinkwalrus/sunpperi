<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>

<template>
  <div>
    <img src="LandingPageView/assets/logo.png" alt="electron-vue">
    <h1>Welcome.</h1>
    <current-page></current-page>
    <versions></versions>
    <a v-link="{ path: '/list' }">list</a>
  </div>
</template>

<script>
  import CurrentPage from './LandingPageView/CurrentPage'
  import Versions from './LandingPageView/Versions'

  export default {
    components: {
      CurrentPage,
      Versions
    },
    name: 'landing-page'
  }
</script>
