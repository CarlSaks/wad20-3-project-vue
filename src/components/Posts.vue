<template>
    <!--Navigation bar-->
    <section>
            <div>
                <img src="../assets/paper-airplane.png" alt="PostIt! logo">
            </div>
            <div class="search">
                <input type="text"/><button>Search</button>
            </div>
            <div>
                <img id="userpicture" src="../assets/me.png" alt="user pic">
            </div>

    <!--First post-->
    <div class="post">
        <ul>
            <li>
                <div class="user-info">
                    <img id="user" src="../assets/me.png" alt="user pic">
                    <h1>Sep 18, 2020 15:16</h1>
                </div>
                <div>
                    <img id="picture" src="https://qph.fs.quoracdn.net/main-qimg-8c0c321b73dcb61cbf5edc5d07b92d68.webp" alt="rain">
                    <h2>I think it's going to rain</h2>
                    <img id="thumbs-up" src="../assets/like_button.png" alt="like">
                </div>
            </li>
        </ul>
    </div>

    <div></div>

    <!--Second post-->
    <div class="post">
        <ul>
            <li>
                <div class="user-info">
                    <img id="user" src="../assets/me.png" alt="user pic">
                    <h1>Sep 18, 2020 15:16</h1>
                </div>
                <div>
                    <h2>Which weighs more, a pound of feathers or a pound of bricks? </h2>
                   <img id="thumbs-up" src="../assets/like_button.png" alt="like">
                </div>
            </li>
        </ul>
    </div>

    <div></div>

    <!--Third post-->
    <div class="post">
        <ul>
            <li>
                <div class="user-info">
                    <img id="user" src="../assets/me.png" alt="user pic">
                    <h1>Sep 18, 2020 17:18</h1>
                </div>
                <div>
                    <img id="picture" src="https://sm.ign.com/t/ign_ap/articlepage/r/rumor-batm/rumor-batman-arkham-collection-coming-to-xbox-one_8kyn.1280.jpg" alt="feeling cute">
                    <h2>Felt cute, might delete later</h2>
                    <img id="thumbs-up" src="../assets/like_button.png" alt="like">
                </div>
            </li>
        </ul>
    </div>

</section>
</template>

<script>

export default {
    name: 'Posts',
}
</script>

<style scoped>

/*Navigation bar*/
header {
    display: flex;
    background-color: white;
    align-items: center;
    width: 100%;
        height: 30px;
        padding: 10px;
    top: 0;
    z-index: 	1;
    position: fixed;
    left: 0;
}

header div{
    height: inherit;
    flex-grow: 8;
}

header div img{
    height: 100%;
    flex-grow: 1;
}
 /* user picture, siin vaja teha nii et pilt oleks vasakule tõstetud */
#userpicture {
    height: 100%;
    position: relative;
    left: 80%;
}

.search > input {
    box-sizing: border-box;
    height: 100%;
    width: 80%;
    margin: 0;
    padding: 0;
    border: 1px solid lightgray;
}

.search > button {
    box-sizing: border-box;
    height: 100%;
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

/*Posts section*/
section {
    background: white;
    width: 900px;
    height: 100%;
    margin: 0 auto;
    padding: 90px;
}

ul {
    list-style-type: none;
    padding: 0;
}

/*First line of post*/
section div.user-info {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

/*Users picture*/
#user {
    height: 30px;
    padding: 10px;
    position: absolute;
}

/*Date and time*/
h1 {
    margin: 10px;
    padding: 5px;
    color:  gray;
    font-size: small;
    margin-left: auto;
}

/*Posted text*/
h2 {
    font-size: 1.4em;
    padding-left: 10px;
}

/*Posted picture*/
#picture {
    height: 500px;
    width: 100%;
    flex-grow: 4;
}


/*Thumbs up icon*/
#thumbs-up {
    width: 33px;
    padding: 8px;
}

/*One post*/
section div.post{
    display: flexbox;
    flex-direction: column;
    box-shadow: 1px 1px 50px gray;
    border-radius: 4px;
}

</style>