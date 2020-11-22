<template>

   <section>

<!--     new posts should be read into state posts    -->

      <div class="post" v-for="(post, index) in posts" :key="index">
         <div class="post-author">

            <span class="post-author-info">

               <img :src="post.avatar" alt="">

               <small>{{ post.name }}</small>

            </span>

            <small>{{ post.date }}</small>
         </div>

         <div class="post-image">
            <img :src="post.media" alt="">
         </div>

         <div class="post-title">
            <h3>{{ post.text }}</h3>
         </div>

         <div class="post-actions">
            <button type="button" name="like" class="like-button">{{ post.likes }}</button>
         </div>

      </div>

      <!--First post-->
      <div class="post">
         <div class="post-author">
            <span class="post-author-info">
               <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80" alt="">
               <small>Gordon Freeman</small>
            </span>
            <small>Sep 18, 2020 15:16</small>
         </div>
         <div class="post-image"><img
             src="http://www.pastatdude.com/uploaded_images/hl2-2007-10-20-16-36-36-32-713089.jpg" alt=""></div>
         <div class="post-title">
            <h3>I think it's going to rain</h3>
         </div>
         <div class="post-actions">
            <button type="button" name="like" class="like-button">15k</button>
         </div>
      </div>

      <!--Second post-->
      <div class="post">
         <div class="post-author"><span class="post-author-info"><img
             src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
             alt=""><small>John Doe</small></span><small>Sep 18, 2020 16:17</small></div>
         <div class="post-title"><h3>Which weighs more, a pound of feathers or a pound of bricks?</h3></div>
         <div class="post-actions">
            <button type="button" name="like" class="like-button">25k</button>
         </div>
      </div>

      <!--Third post-->
      <div class="post">
         <div class="post-author"><span class="post-author-info"><img
             src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
             alt=""><small>Bruce Wayne</small></span><small>Sep 18, 2020 17:18</small></div>
         <div class="post-image"><img
             src="https://i.pcmag.com/imagery/reviews/00EfzjLJNL6FNKVxviGg7Zw-2.1569473216.fit_scale.size_1182x667.jpg"
             alt=""></div>
         <div class="post-title"><h3>Felt cute, might delete later</h3></div>
         <div class="post-actions">
            <button type="button" name="like" class="like-button">100k</button>
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