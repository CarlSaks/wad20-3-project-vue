export default class Post {
    constructor(author, date, media, text) {
        this.avatar = author.avatar
        this.name = author.firstName + " " + author.lastName
        this.date = date
        this.media = media
        this.text = text
        this.likes = 0
    }
}