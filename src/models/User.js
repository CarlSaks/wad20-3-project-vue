export default class User {
    constructor(firstname, lastname, email, avatar) {
        this.following = []
        this.likes = []

        this.firstname = firstname
        this.lastname = lastname
        this.email = email
        this.avatar = avatar
    }
}