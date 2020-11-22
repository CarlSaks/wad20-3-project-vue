<template>
   <section id="browse-container">

      <div v-for="(user, index) in users" :key="index" class="profile">
         <div class="small-avatar">

            <img :src="user.avatar" alt="">

         </div>

         <h2>{{ user | fullName }}</h2>

         <FollowUserButton :index="Number.parseInt(index)"/>

      </div>

<!--   esimene kasutaja   -->
      <div class="profile">
         <div class="small-avatar"><img
             src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
             alt=""></div>
         <h2>John Doe</h2>
         <button class="follow-button">Follow</button>
      </div>

<!--   teine kasutaja   -->
      <div class="profile">
         <div class="small-avatar"><img
             src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
             alt=""></div>
         <h2>Gordon Freeman</h2>
         <button class="follow-button">Follow</button>
      </div>

<!--   kolmas kasutaja   -->
      <div class="profile">
         <div class="small-avatar"><img
             src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
             alt=""></div>
         <h2>John Doe</h2>
         <button class="follow-button">Follow</button>
      </div>
   </section>
</template>

<script>
// import User from "@/components/User";

import FollowUserButton from "@/components/FollowUserButton";

export default {
   name: "Browse",

   components: {
      // User,
      FollowUserButton
   },

   computed: {
      id() {
         return this.$route.params.id
      },
      users() {
         let result = {}

         for (let i in this.$store.state.users) {

            if (i != this.id) {
               result[i] = this.$store.state.users[i]
            }
         }

         return result
      }
   },

   filters: {
      fullName(value) {
         return value.firstName + " " + value.lastName
      }
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