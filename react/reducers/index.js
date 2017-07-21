import {combineReducers} from "redux";
import friendsReducers from "./friendsReducer";
import loggedInUserReducer from "./loggedInUserReducer";
import friendsListReducer from "./friendsListReducer";

export default combineReducers({
    friends: friendsReducers,
    loggedInUser: loggedInUserReducer,
    friendsList: friendsListReducer
});
