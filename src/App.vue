<template>
  <div id="app">
    <myheader></myheader>
      <div id="nav">
        <ul>
          <li><router-link to="/contents1">Contents1</router-link></li>
          <li><router-link to="/contents2">Contents2</router-link></li>
          <li><router-link to="/contents3">Contents3</router-link></li>
          <li><router-link to="/contents4">Contents4</router-link></li>
          <li><router-link to="/contents5">Contents5</router-link></li>
          <li><router-link to="/contents6">Contents6</router-link></li>
          <li><router-link to="/contents7">Contents7</router-link></li>
        </ul>        
      </div>
      <router-view/>
    <myfooter></myfooter>
  </div>
</template>

<script>
import 'normalize.css'
import myheader from './components/myheader'
import myfooter from './components/myfooter'


export default {
    components: {
      myheader,
      myfooter
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

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  li {
    display: list-item;
    padding-bottom: 15px;
  }
  ul {
    float: left;
  }
}
</style>
