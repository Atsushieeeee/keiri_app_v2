<template>
      <div id="nav">
        <ul>
          <li><router-link to="/contents1"><p>手形分割計算</p></router-link></li>
          <li><router-link to="/contents2"><p>預金利息</p></router-link></li>
          <li><router-link to="/contents3"><p>上場株式配当金</p></router-link></li>
          <li><router-link to="/contents4"><p>非上場株式配当金</p></router-link></li>
          <li><router-link to="/contents5"><p>契約書</p></router-link></li>
          <li><router-link to="/contents6"><p>源泉</p></router-link></li>
          <li><router-link to="/contents7"><p>売上代金に係る金銭又は有価証券の受取書</p></router-link></li>
        </ul>        
      </div>
</template>

<script>

</script>

<style lang="scss">

#nav {
  width: 20vw;
  height: 100%;
  a {
    width: 100%;
    height: 100%;
    font-weight: bold;
    font-size: 14px;
    color: #2c3e50;
    justify-content: center;
    display: flex;
    align-items: center;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  li {
    height: 10%;
    display: list-item;
    // padding-bottom: 15px;
    margin: 5px;
    flex: 1;
    background-color:#ffe9a9;
    display: flex;
    box-shadow: 0 0 2px gray;
    border-bottom: solid 4px #fac559;
    justify-content: center;
    align-items: center;
  }
  ul {
    align-content: space-around;
    padding: 0;
    height: 100%;
    width: 100%;
    float: left;
  }
}
</style>