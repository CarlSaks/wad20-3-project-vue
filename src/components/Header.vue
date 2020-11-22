<template>

   <section id="Header">
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

         <img @click="isHidden = !isHidden" :src="user.avatar" class="avatar" alt="Me">
         <div v-if="isHidden" id="dropdown">

               <ul class="root">
                  <li>{{ user | fullName }}</li>
                  <li>{{ user.email }}</li>
                  <li>
                     <router-link to="/browse">
                        <a>Browse</a>
                     </router-link>
                  </li>
                  <li>
                     <router-link to="/">
                        <a>Log Out</a>
                     </router-link>
                  </li>
               </ul>

         </div>
      </div>
   </section>

</template>

<script>
export default {
name: "Header",

   data() {
      return {
         isHidden: false
      }
   },

   computed: {
      user() {
         return this.$store.state.user
      }
   },

   mounted() {
      this.$store.dispatch('getUser')
   },

   filters: {
      fullName(user) {
         return user.firstname + " " + user.lastname
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

section[id='Header'] {
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

section[id='Header'] #router {
   height: inherit;
}

section[id='Header']:hover {
   box-shadow: 0 -20px 30px #4d4d4d;
}

section[id='Header'] div {
   height: 30px;
}

section[id='Header'] div img {
   height: inherit;
   border-radius: 100%;
   object-fit: cover;
   object-position: top center;
   margin: 0 10px;
}

section[id='Header'] .search-container {
   width: 50%;
   max-width: 700px;
}

section[id='Header'] .search-container > input {
   height: 30px;
   width: 75%;
   border: 1px solid #e0e0e0;
}

section[id='Header'] .search-container > button {
   height: 30px;
   width: 25%;
   border-top-left-radius: 0;
   border-bottom-left-radius: 0;
}

ul {
   list-style-type: none;
   margin: 0;
   padding: 0;
   top: 40px;
   right: 0;
   width: max-content;
   background-color: white;
   font-weight: bold;
   position: absolute;
   box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
   z-index: 1;
   text-align: left;
}

li {
   padding: 8px 16px;
   margin: 8px;
   border-bottom: 1px solid #e5e5e5;
}

li:last-child {
   border-bottom: none;
}
li:first-child {
   border-bottom: none;
}
</style>