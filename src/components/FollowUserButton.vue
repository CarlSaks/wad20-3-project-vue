<template>

   <button
      :class="{ 'follow-button': !following, 'unfollow-button': following }"
      @click="toggleFollow"
   >
      <span v-if="!following">Follow</span>
      <span v-if="following">Unfollow</span>
   </button>

</template>

<script>
export default {
name: "FollowUserButton",

   computed: {
      following() {
         return this.$store.getters.followingUser(this.index)
      },
   },

   props: {
      index: Number,
   },

   methods: {
      toggleFollow() {
         this.$store.commit('toggleFollow', this.index)
      }
   },
}
</script>

<style scoped>
.follow-button {
   background-color: #6C3483;
   box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
}

.unfollow-button {
   color: #6c3483;
   background-color: #ffffff;
   box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
}
</style>