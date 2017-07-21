import $ from "jquery";
import UserPageComponent from "./UserPage.component";
import UsersListComponent from "./UsersList.component";
import userService from "./UserService";

export class AppComponent {

    appendUserPage(id){
        if(this.userPageElement)
            this.userPageElement.remove();

        let userPage = new UserPageComponent(id);
        this.userPageElement = userPage.render();
        this.element.append( this.userPageElement );
    }

    getUsersList() {
        userService
            .getAllUsers()
            .then( this.appendUsersList.bind(this) );
    }

    appendUsersList(list){
        let usersList = new UsersListComponent(list);
        usersList.onUserSelected( this.appendUserPage.bind(this) );
        this.element.append( usersList.render() );
    }

    render(){
        this.element = $(`<div></div>`);
        this.getUsersList();
        return this.element;
    }
}

export default function createApp(){
    let app = new AppComponent();
    $(document.body).append( app.render() );
}
