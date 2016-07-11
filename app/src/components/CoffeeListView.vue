<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>

<template>
  <div class="container">
    <img src='LandingPageView/assets/logo.png' alt='electron-vue'>
    <div class="columns">
        <coffee-card  v-for='coffee in coffees' :coffee='coffee'></coffee-card>
    </div>
  </div>

</template>

<script>
  import CoffeeCard from './CoffeeListView/CoffeeCard'

  export default {
    components: {
      CoffeeCard
    },
    name: 'coffee-list',
    data () {
      return {
        coffees: [
          {
            id: 'cfg',
            name: 'kakkakulli',
            roastDate: '13.04.92',
            variety: 'arabica',
            rating: 4,
            notes: 'pretty good'
          },
          {
            id: 'abc',
            name: 'boot',
            roastDate: '24.5.2016',
            variety: 'robusta',
            rating: 2,
            notes: 'shit'
          }
        ]}
    }
  }
</script>
