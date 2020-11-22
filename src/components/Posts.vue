<template>

   <section>

<!--     new posts should be read into state posts    -->

      <div class="post" v-for="(post, index) in posts" :key="index">
         <div class="post-author">

            <span class="post-author-info">

               <img :src="post.author.avatar" alt="">

               <small>{{ post.author['firstname'] + " " + post.author['lastname'] }}</small>

            </span>

            <small>{{ post['createTime'] }}</small>
         </div>

         <div v-if="post.media != null" class="post-image">
            <img v-if="post.media.type === 'image'" :src="post.media.url" alt="">git
            <video v-else controls autoplay loop :src="post.media.url"/>
         </div>

         <div class="post-title">
            <h3>{{ post.text }}</h3>
         </div>

         <div class="post-actions">
            <button type="button" name="like" class="like-button">{{ post.likes }}</button>
         </div>

      </div>

   </section>

</template>

<script>
// import Post from './Post'

export default {
   name: 'Posts',

   components: {
      // Post,
   },

   computed: {
      posts() {
         return this.$store.state.posts
      },
   },

   mounted() {
      this.$store.dispatch('getPosts')
   }
}
</script>

<style scoped>
section {
   width: 900px;
   min-height: 100%;
   margin: auto auto;
   padding: 90px 15px 15px 15px;
   background-color: #ffffff;
}

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