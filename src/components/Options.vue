<template>
   <section id="dropdown">
      <ul class="root">
        <User></User>
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
   </section>
</template>

<script>
import User from './User.vue'

export default {
name: "options",
  components: {
    User,
  },
  beforeCreate() {
    this.$store.dispatch("getUser")
  },
  data() {
    return {
      isHidden: false
    }
  }
}
</script>

<style scoped>
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