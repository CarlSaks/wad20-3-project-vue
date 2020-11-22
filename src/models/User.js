export default class User {
    constructor(firstName, lastname, email, avatar) {
        this.following = []
        this.firstName = firstName
        this.lastName = lastname
        this.email = email
        this.avatar = avatar
    }
}