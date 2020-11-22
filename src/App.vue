<template>
  <div id="app">

     <Header v-if="this.$route.path !== '/'"/>

    <router-view></router-view>

  </div>
</template>

<script>
  import Header from './components/Header'

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
   height: 100vh;
   display: grid;
}

body {
   background: #2671e2;
   margin: 0;
}


*, ::before, ::after {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   font-family: 'Roboto Slab', serif;
   outline: none;
}

button {
   padding: 8px 16px;
   margin: 4px 0;
   color: #ffffff;
   background-color: #01579b;
   border: none;
   border-radius: 4px;
}

button:hover {
   box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
   cursor: pointer;
}
</style>
