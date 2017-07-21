let $ = require("jquery"),
    UserDetailsComponent = require("./UserDetails.component"),
    PostsComponent = require("./Posts.component"),
    userService = require("./UserService"),
    postsService = require("./PostsService");

class UserPageComponent {
    constructor(userId){
        this.userId = userId;
    }

    getUser() {
        userService
            .getUser(this.userId)
            .then( this.appendUserDetails.bind(this) );
    }

    getPosts(){
        postsService
            .getPosts(this.userId)
            .then( this.appendUserPosts.bind(this) );
    }

    appendUserDetails(user){
        let userComponent = new UserDetailsComponent(user);
        this.element.find(".details").append( userComponent.render() );
    }

    appendUserPosts(posts){
        let userPosts = new PostsComponent(posts);
        this.element.find(".posts").append( userPosts.render() );
    }

    render(){
        this.element = $(`
            <main>
                <div class="details"></div>
                <div class="posts"></div>
            </main>
        `);
        this.getUser();
        this.getPosts();
        return this.element;
    }
}

module.exports = UserPageComponent;
