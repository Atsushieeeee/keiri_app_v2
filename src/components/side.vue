<template>
      <div id="nav">
        <ul>
          <li><router-link to="/contents1">手形分割計算</router-link></li>
          <li><router-link to="/contents2">預金利息</router-link></li>
          <li><router-link to="/contents3">上場株式配当金</router-link></li>
          <li><router-link to="/contents4">非上場株式配当金</router-link></li>
          <li><router-link to="/contents5">契約書</router-link></li>
          <li><router-link to="/contents6">源泉</router-link></li>
          <li><router-link to="/contents7">売上代金に係る金銭又は有価証券の受取書</router-link></li>
        </ul>        
      </div>
</template>

<script>

</script>

<style lang="scss">
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