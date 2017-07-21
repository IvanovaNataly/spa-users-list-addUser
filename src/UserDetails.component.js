let $ = require("jquery");

class UserDetailsComponent {
    constructor(user){
        this.user = user;
    }

    render(){
        return $(`
        <article>
            <h1>${this.user.name}</h1>
            <dl>
                <dt>Email</dt>
                <dd>${this.user.email}</dd>
                <dt>Phone</dt>
                <dd>${this.user.phone}</dd>
            </dl>
        </article>
        `)
    }
}

module.exports = UserDetailsComponent;
