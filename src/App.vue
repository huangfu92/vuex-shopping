<template>
  <div id="app">
    <product></product>
    <!-- 购物车的列表 -->
    <cart></cart>
    <!-- 小记 -->
    <info></info>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
  import product from './components/product';
  import cart from './components/cart';
  import info from './components/info';
  export default {
        name: 'app',
        components: {
            product,
            cart,
            info
        }
    }
</script>
