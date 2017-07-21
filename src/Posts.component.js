let $ = require("jquery");

class PostsComponent {
    constructor(posts){
        this.posts = posts;
    }

    renderPosts() {
        let postsString = this.posts
            .map( post => `
                <dt>${post.title}</dt>
                <dd>${post.body}</dd>
            ` );

        return postsString.join("");
    }

    render(){
        return $(`
        <article>
            <dl>
                ${ this.renderPosts() }
            </dl>
        </article>
        `)
    }
}

module.exports = PostsComponent;
