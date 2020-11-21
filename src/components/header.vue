<template>
   <section>
      <header>
         <img id="navLogo" src="../assets/paper-airplane.png" alt="PostIt! logo">

         <div id="search">
            <input type="text"/>
            <button>Search</button>
         </div>

         <img id="userPicture" src="../assets/me.png" alt="user pic">
      </header>
   </section>
</template>

<script>


export default {
name: "header"
}
</script>

<style scoped>
header {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   background-color: white;
   align-items: center;
   width: 100%;
   height: 40px;
   padding: 10px;
   top: 0;
   left: 0;
   z-index: 	1;
   position: fixed;
}

#navLogo, #userPicture {
   height: inherit;
}

#search {
   width: 30%;
   height: inherit;
   display: flex;
   align-items: center;
}

#search > input {
   box-sizing: border-box;
   height: 90%;
   width: 80%;
   margin: 0;
   padding: 0;
   border: 1px solid lightgray;
}

#search > button {
   box-sizing: border-box;
   height: 90%;
   width: 20%;
   margin: 0;
   padding: 0;
   border: 1px solid #235db4;
   cursor: pointer;
   background-color: #235db4;
   color:white;
   border-top-right-radius: 7px;
   border-bottom-right-radius: 7px;
}
</style>