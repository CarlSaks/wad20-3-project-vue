<template>

      <button type="button" name="like" class="like-button"
              :class="{ 'liked': liked }"
              @click="toggleLike"
      >{{ this.likes }}</button>

</template>

<script>
export default {
name: "LikePostButton",

   computed: {
      liked() {
         return this.$store.getters.liked(this.id)
      }
   },

   props: {
      id: Number,
      likes: String
   },

   methods: {
      toggleLike() {
         this.$store.commit('toggleLike', this.id)
      }
   }
}
</script>

<style scoped>
.like-button {
   background-image: url(../assets/like_button.png);
   background-size: 15px;
   background-repeat: no-repeat;
   background-position: 5px center;
   background-color: #8a8a8a;
   width: 60px;
   height: 25px;
   padding-left: 23px;
   line-height: 10px;
   text-align: left;
   border: none;
}

.like-button.liked {
   background-color: #01579b;
}
</style>