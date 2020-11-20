<template>
     <!--outer content container-->
    <section>

        <!-- logo container -->
        <div class="page-logo">

            <!-- Vigane! <img src="../../assets/images/paper-airplane.png" alt="PostIt Logo">-->

        </div>

        <!-- inner content container -->
        <div class="login-layer">
            <div class="login-container">
                <div class="flex-content">

                    <p>Welcome to postIt!</p>

                    <p class="small">
                        <a href="#">Create an Account</a>
                    </p>

                    <p class="small">Or</p>

                    <p>Please Log In</p>

                </div>

                <!-- Log In Form-->
                <form class="flex-content" autocomplete="off">

                    <!-- email input -->
                    <input type="email" name="email"
                        class="form-input" id="email-input" 
                        placeholder="   Email" autocomplete="off" 
                        autofocus>

                    <!-- password input -->
                    <input type="password" name="password" 
                        class="form-input" id="password-input" 
                        placeholder="   Password" autocomplete="new-password">

                    <router-link :to="{ name: 'Header' }">
                    <button type="submit" id="login-button" onclick="location.href='dist/html/main.html'">Log In</button></router-link>

                    <p class="smaller">
                        <a href="#">Forgot password?</a>
                    </p>

                </form>
            </div>
        </div>
    </section>
</template>

<script>

//import Header from './Header'
//import PostSection from './PostSection'

export default {
    name: "Login",
    // need to add login.js 
}
</script>

<style scoped>
/* sinine: #2671e2 */

*, ::before, ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none; /*might cause problems
        Porperty is nonstandard. Was suggested to not use it.   ¯\_(ツ)_/¯   */
}

body {
    background-color: #2671e2;
    height: 100vh;
    display: grid;
    grid-template-columns: auto 600px auto;
    grid-template-rows: auto 600px auto;
}

section {
    background-color: #ffffff;
    width: 600px;
    height: 600px;
    grid-column: 2;
    grid-row: 2;

    box-shadow: #0448ad 1px 1px 20px;
}

.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: inherit;
}

.flex-content {
    text-align: center;
    width: 50%;
    display: flex;          /* flex in use */
    flex-direction: column;
    justify-content: space-around;
    flex-grow: 6;
}

.flex-content:first-child::before {
    content: '';
    display: block;
    clear: both;
    height: 50px;
}
.flex-content:last-child::after {
    content: '';
    display: block;
    clear: both;
    height: 30px;
}
.flex-content:last-child {
    flex-grow: 4;
    justify-content: space-around;
}

.login-container * {
    font-size: 1.3em;
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: rgb(50,50,50);
}
.smaller {
    font-size: .7em;
}
.small {                                    /* class selector 1*/
    font-size: .9em;
}

input[class="form-input"] {               /* class selector 2*/
    width: 90%;
    align-self: center;
    height: 17%;
    margin: 5px;
    color: transparent;
    text-shadow: 0px 0px .5px rgb(49, 49, 49);
    border: 1px solid gray;
    border-radius: 3px;
    padding: 10px;
    padding-left: 5px;
    font-size: .8em;
}
.form-input::placeholder {
    text-shadow: 0px 0px .5px rgb(105, 105, 105);
}

.form-input:placeholder-shown {
    font-size: .8em;
    box-shadow: none;
}

#login-button {             /* ID selector */
    align-self: center;
    width: 30%;
    height: 15%;
    font-size: .9em;
    background-color: rgb(38, 98, 228);
    color: #ffffff;
    border: 1px solid rgb(34, 89, 209);
    border-radius: 7px;
}

#login-button:hover {       /* pseude-class selector */
    background-color: #317ae9;
    border: 1px solid #317ae9;
    cursor: pointer;
}

.flex-content p > a {
    color: #6da7ff;
}

.page-logo {
    position: absolute;
}
.page-logo img {            /* decendant selector */
    position: relative;
    top: 20px;
    left: 20px;
}
.login-layer {
    height: inherit;
}

p > a:hover {               /* Child selector */
    color:#5a98f7;
}

#password-input + button {  /* Adjacent sibling selector */
    outline: none;
}

#login-button ~ * {         /* General sibling selector*/
    outline: none;
}
</style>