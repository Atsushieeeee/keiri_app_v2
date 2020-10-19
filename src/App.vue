<template>
  <div id="app">
    <myheader></myheader>
    <side></side>
    <router-view/>
    <myfooter></myfooter>
  </div>
</template>

<script>
import 'normalize.css'
import myheader from './components/myheader'
import myfooter from './components/myfooter'
import side from './components/side'

export default {
    components: {
      myheader,
      myfooter,
      side
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  position: relative;
  padding-bottom: 50px;
  box-sizing: border-box;
}
</style>
