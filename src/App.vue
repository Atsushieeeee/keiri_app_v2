<template>
  <div id="app">
    <myheader></myheader>
    <div class="contents">
      <side></side>
      <router-view/>
    </div>
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
  min-height: 100vh;
  position: relative;
  padding-bottom: 50px;
  box-sizing: border-box;
}

div{
  color: #424242;
}

a{
  text-decoration: none;
}

.contents{
  flex-direction: row;
  display:flex;
}

  .mbtn{
    display: inline-block;
    padding: 0.2em 1.2em;
    text-decoration: none;
    background: #668ad8;/*ボタン色*/
    border-bottom: solid 4px #627295;
    color: #FFF;
    font-size: 15px;
    border-radius: 3px;
    &:active{
      -webkit-transform: translateY(4px);
      transform: translateY(4px);/*下に動く*/
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);/*影を小さく*/
      border-bottom: none;
    }
  }

  .cbtn {
    display: inline-block;
    padding: 0.2em 1.2em;
    text-decoration: none;
    background: #FA5858;/*ボタン色*/
    border-bottom: solid 4px #B43104;
    color: #FFF;
    border-radius: 3px;
    font-size: 15px;
    &:active{
      -webkit-transform: translateY(4px);
      transform: translateY(4px);/*下に動く*/
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);/*影を小さく*/
      border-bottom: none;
    }
  }


</style>
