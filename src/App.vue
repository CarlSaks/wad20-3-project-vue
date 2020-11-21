<template>
  <div id="app">

     <Header v-if="this.$route.path !== '/'"/>

    <router-view></router-view>

  </div>
</template>

<script>
  import Header from './components/header'

  export default {
    name: 'App',
     components: {
        Header,
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
//margin-top: 60px;
   height: 100vh;
   display: grid;
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
   user-select: none;
}
</style>
