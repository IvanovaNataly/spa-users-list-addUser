/**
 * Created by tresermichael on 7/19/17.
 */
import React from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {withRouter} from "react-router";
import {getFriendsList, removeFriend} from "../../actions/creators";
import Friend from "./Friend";

import "./friends-list.scss";

class FriendsList extends React.Component {

    constructor(props){
        super(props);

        this.props.getFriendsList();
    }

    removeFriend(id) {
        this.props.removeFriend(id);
    }

    renderFriend(friend, i){
        return <li key={i}>
            <button onClick={ e => this.removeFriend(friend.id) }>Remove</button>
            <NavLink exact activeStyle={ { color: "yellow" } } activeClassName="active" to={`/users/${friend.id}`}><Friend name={friend.name}/></NavLink>
        </li>
    }

    render(){

        return (<nav className="friends-list">
            <h3>Friends List</h3>
            <ul>
                { this.props.friends.map( this.renderFriend.bind(this) ) }
            </ul>
        </nav>)
    }
}

function mapStateToProps(state){
    return {
        friends: state.friendsList.friendsObjects
    }
}

function mapDispatchToProps(dispatch){
    return {
        getFriendsList: () => dispatch( getFriendsList() ),
        removeFriend: id => dispatch( removeFriend(id) )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendsList));
