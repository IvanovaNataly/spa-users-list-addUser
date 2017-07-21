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

export function getUsersList(){
    return dispatch => {
        dispatch( { type: ACTIONS.GET_USERS_LIST_REQUEST} );

        UsersService.getAllUsers()
            .then( users => dispatch( { type: ACTIONS.GET_USERS_LIST_RESPONSE, users} ) )
    }
}

export function getUser(id){
    return dispatch => {
        dispatch( { type: ACTIONS.GET_USER_REQUEST} );

        Promise.all([UsersService.getUser(id), PostsService.getPosts(id)])
            .then( ([user,posts]) => dispatch( { type: ACTIONS.GET_USER_RESPONSE, user, posts} ));
    }
}

export function getFriendsList(){
    // let friends = FriendsService.get() || [];
    // return( { type: ACTIONS.GET_FRIENDS_LIST_RESPONSE, friends} )
    return dispatch => {
        dispatch( {type: ACTIONS.GET_FRIENDS_LIST_REQUEST} );

        UsersService.getAllUsers()
            .then( users => {
                let numbers = [1,2,3];
                let friendsList = [];
                users.filter(user => {

                    if (numbers.includes(user.id)) {
                        friendsList.push( user) ;
                    }
                    dispatch( { type: ACTIONS.GET_FRIENDS_LIST_RESPONSE, friends: friendsList } )
                }) }
            )
    }
}

export function addToFriends(user) {
    return( { type: ACTIONS.ADD_TO_FRIENDS, user} )
}

export function removeFriend(id) {
    return( { type: ACTIONS.REMOVE_FRIEND, id })
}

