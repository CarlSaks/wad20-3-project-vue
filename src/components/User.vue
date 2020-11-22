<template>
   <div class="profile">
<!--      <div class="small-avatar">-->

<!--         <img :src="" alt="">-->

<!--      </div>-->

<!--      <h2>Name</h2>-->

<!--      <button-->

<!--      >Follow</button>-->

   </div>
</template>

<script>

export default {
   name: "profile"
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