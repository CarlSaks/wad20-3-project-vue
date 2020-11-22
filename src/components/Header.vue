<template>
   <section id="header">
      <div class="logo-container">

         <router-link to="/posts" id="router">
            <img src="../assets/paper-airplane.png" alt="postIt">
         </router-link>

      </div>
      <div class="search-container">

         <input type="text" name="search"/>
         <button type="button">Search</button>

      </div>
      <div class="avatar-container">

         <img v-on:click="isHidden = !isHidden" src="../assets/me.png" class="avatar" alt="Me">
         <Options v-if="isHidden"/>

      </div>
   </section>
</template>

<script>
import Options from './Options'

export default {
name: "header",
   components: {
      Options,
   },
   data() {
      return {
         isHidden: false
      }
   }
}
</script>

<style scoped>
* {
   padding: 0;
   margin: 0;
   box-sizing: border-box;
}

section[id='header'] {
   position: fixed;
   z-index: 1;
   top: 0;
   left: 0;
   width: 100%;
   display: flex;
   flex-direction: row;
   background-color: white;
   justify-content: space-between;
   padding: 5px;
}

section[id='header'] #router {
   height: inherit;
}

section[id='header']:hover {
   box-shadow: 0 -20px 30px #4d4d4d;
}

section[id='header'] div {
   height: 30px;
}

section[id='header'] div img {
   height: inherit;
   border-radius: 100%;
   object-fit: cover;
   object-position: top center;
   margin: 0 10px;
}

section[id='header'] .search-container {
   width: 50%;
   max-width: 700px;
}

section[id='header'] .search-container > input {
   height: 30px;
   width: 75%;
   border: 1px solid #e0e0e0;
}

section[id='header'] .search-container > button {
   height: 30px;
   width: 25%;
   border-top-left-radius: 0;
   border-bottom-left-radius: 0;
}
</style>