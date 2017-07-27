import * as ACTIONS from "./index";
import UsersService from "../services/UserService";
import PostsService from "../services/PostsService";
import FriendsService from "../services/FriendsService";

export function addUser(user){
    return { type: ACTIONS.ADD_USER, user };
}

export function removeUser(user){
    return { type: ACTIONS.REMOVE_USER, user };
}

export function logIn(user){
    return { type: ACTIONS.LOG_IN, user};
}

export function logOut(){
    return { type: ACTIONS.LOG_OUT };
}

export function setPosts(posts){
    return { type: ACTIONS.SET_POSTS, posts };
}

export function getUsersList(usersService = UsersService){
    return dispatch => {
        dispatch( { type: ACTIONS.GET_USERS_LIST_REQUEST} );

        usersService.getAllUsers()
            .then( users => dispatch( { type: ACTIONS.GET_USERS_LIST_RESPONSE, users} ) )
    }
}

export function getUser(id, usersService = UsersService, postsService=PostsService, promise=Promise){
    return dispatch => {
        dispatch( { type: ACTIONS.GET_USER_REQUEST} );

        promise.all([usersService.getUser(id), postsService.getPosts(id)])
            .then( ([user,posts]) => dispatch( { type: ACTIONS.GET_USER_RESPONSE, user, posts} ));
    }
}

export function getFriendsList(){
    return dispatch => {
        UsersService.getAllUsers()
            .then( users => {
                let numbers = FriendsService.get() ;
                let friendsList = [];
                users.filter(user => {

                    if (numbers.includes(user.id)) {
                        friendsList.push(user);
                    }
                    dispatch({type: ACTIONS.GET_FRIENDS_LIST_RESPONSE, friends: friendsList})
                })
            })
    }
}

export function addToFriends(id) {
    return( { type: ACTIONS.ADD_TO_FRIENDS, id} )
}

export function removeFriend(id) {
    return( { type: ACTIONS.REMOVE_FRIEND, id })
}


