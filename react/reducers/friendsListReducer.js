import {combineReducers} from "redux";
import {GET_FRIENDS_LIST_RESPONSE, ADD_TO_FRIENDS, REMOVE_FRIEND} from "../actions";
import FriendsService from "../services/FriendsService";


function friendsNumbersReducer(state = [], action){
    switch (action.type){
        case ADD_TO_FRIENDS:
                let result = state.find( friend => action.id == friend.id );
            if (!result) {
                FriendsService.set([action.id, ...state]);
                return [action.id, ...state]
            }
            else return state;
        }
    return state;
}

function friendsObjectsReducer(state = [], action){

    switch (action.type){
        case GET_FRIENDS_LIST_RESPONSE:
            return [...action.friends];
        // case ADD_TO_FRIENDS:
        //     let result = state.find( friend => action.user.id == friend.id );
        //     if (!result) {
        //         FriendsService.set([action.user, ...state]);
        //         return [action.user, ...state]
        //     }
        //     else return state;
        case REMOVE_FRIEND:
            return state.filter(friend => friend.id != action.id)
    }

    return state;
}



export default combineReducers({
    friendsIds: friendsNumbersReducer,
    friendsObjects: friendsObjectsReducer
});
