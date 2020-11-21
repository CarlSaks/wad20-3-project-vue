<template>
  <div id="app">
    <Login/>
    <router-view></router-view>
  </div>
</template>

<script>
  import Login from './components/Login'

  export default {
    name: 'App',
    components: {
      Login
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
    background: #2671e2;
    margin: 0;
}

* {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: normal;
    font-size: 1.04em;
}


*, ::before, ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none; /*might cause problems
        Porperty is nonstandard. Was suggested to not use it.   ¯\_(ツ)_/¯   */
}
</style>
