<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
    import myHeader from './components/common/myHeader.vue'
    import myFooter from './components/common/myFooter.vue'
    export default {
      name: 'app',
      components: {
        myHeader,
        myFooter
      }
    }
</script>

<style lang="less" rel="stylesheet/less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
* {
  margin: 0;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}

</style>
