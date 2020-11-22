<template>
   <div class="post">
      <div class="post-author">

            <span class="post-author-info">

               <img src="../assets/me.png" alt="">

               <small>name</small>

            </span>

         <small>Date & Time</small>
      </div>

      <div class="post-image">
         <img src="https://images.unsplash.com/photo-1589738373432-91e2d93453a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="">
      </div>

      <div class="post-title">
         <h3>Post Text, Hello!</h3>
      </div>

      <div class="post-actions">
         <button type="button" name="like" class="like-button">0</button>
      </div>

   </div>
</template>

<script>
export default {
name: "Post",
  props: {
  index: Number,
    liked: Boolean
  },
  computed: {
  post: function() {
    return this.$store.getters.getPost(this)
  }
  }
}
</script>

<style scoped>
.post {
   width: 80%;
   margin: 15px auto;
   box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
   border-radius: 5px;
   display: flex;
   flex-direction: column;

   padding: 10px;
}

.post .post-author-info img {
   width: 30px;
   height: 30px;
   border-radius: 100%;
   object-fit: cover;
   object-position: top;
   margin: 5px;
}

.post .post-image img, video {
   width: 100%;
   min-height: 150px;
   max-height: 350px;
   object-fit: cover;
   object-position: top center;
}

.post .post-author, .post-author-info {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding-bottom: 5px;
}

.post .post-title {
   text-align: left;
   padding: 10px 0;
}

.post .post-actions button {
   float: left;
   margin: 5px 0;
}

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