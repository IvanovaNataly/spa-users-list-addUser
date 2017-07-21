let $ = require("jquery");

class PostsService{

    constructor() {
        this.url = "https://jsonplaceholder.typicode.com/posts/?userId=";
    }

    getPosts(userId){
        console.log("requested user", userId);
        return $.get(this.url + userId);
    }

}

module.exports = new PostsService();
