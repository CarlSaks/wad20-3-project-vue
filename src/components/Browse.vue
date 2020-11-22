<template>
   <section id="browse-container">

      <div v-for="user in users" :key="user.id" class="profile">
         <div class="small-avatar">

            <img :src="user.avatar" alt="">

         </div>

         <h2>{{ user["firstname"] + " " + user["lastname"] }}</h2>

         <FollowUserButton :index="user.id"/>

      </div>

   </section>
</template>

<script>

import FollowUserButton from "@/components/FollowUserButton";

export default {
   name: "Browse",

   components: {
      FollowUserButton
   },

   computed: {
      users() {
         return this.$store.state.users
      },
   },

   mounted() {
      this.$store.dispatch('getUsers')
   }
}
</script>

<style scoped>
.follow-button {
   background-color: #6C3483;
   box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
}

.unfollow-button{
   color: #6c3483;
   background-color: #ffffff;
   box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
}

#browse-container {
   width: 900px;
   min-height: 100%;
   margin: auto auto;
   padding: 90px 15px 15px 15px;
   background-color: #ffffff;
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   align-content: flex-start;
   flex-wrap: wrap;
}

.profile {
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
   box-sizing: border-box;
   min-width: 45%;
   max-width: 45%;
   max-height: 300px;
   min-height: 300px;
   border: solid #D5D8DC 1px;
   padding: 5px;
   border-radius: 8px;
   text-align: center;
   margin-top: 20px;
}

.small-avatar {
   width: 100px;
   height: 100px;
}
.small-avatar img {
   width: inherit;
   height: inherit;
   object-fit: cover;
   object-position: top;
   border-radius: 50%;
}
</style>