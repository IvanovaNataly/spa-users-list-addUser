/**
 * Created by tresermichael on 7/19/17.
 */
import React from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {withRouter} from "react-router";
import CSSTransitionGroup from 'react-addons-css-transition-group';
import {getFriendsList, removeFriend} from "../../actions/creators";
import Friend from "./Friend";
import Notification from "../../notifications/Notification";

import "./friends-list.scss";

class FriendsList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            notificationMsg: null
        }
        this.props.getFriendsList();
    }

    removeFriend(friend) {
        this.props.removeFriend(friend.id);
        this.state.notificationMsg = friend.name + " is not your friend now."
        setTimeout(() => {
            this.state.notificationMsg = null;
        }, 3000);
    }

    notificatonEval() {
        if (this.state.notificationMsg)
            return <Notification msg={ this.state.notificationMsg } specialClass=" friends-list-notify" />
    }

    renderFriend(friend, i){
        return <li key={i}>
            <NavLink exact activeStyle={ { color: "yellow" } } activeClassName="active" to={`/users/${friend.id}`}>
                <Friend name={friend.name}/>
            </NavLink>
            <div className="btn-container">
                <button onClick={ e => this.removeFriend(friend) } className="btn-remove">Remove</button>
            </div>
        </li>
    }

    render(){
        var note = (this.state.notificationMsg) ? <Notification msg={ this.state.notificationMsg } specialClass=" friends-list-notify" /> : '';
        return (<nav className="friends-list">
            <h3>Friends List</h3>
            {/*{this.notificatonEval()}*/}
            {/*{note}*/}
            <p>
                {this.state.notificationMsg}
            </p>
            <ul>
                <CSSTransitionGroup
                    transitionName="fade"
                    transitionEnter={false}
                    transitionLeaveTimeout={1500}
                >
                    { this.props.friendsObjects.map( this.renderFriend.bind(this) ) }
                </CSSTransitionGroup>
            </ul>
        </nav>)
    }
}

function mapStateToProps(state){
    return {
        friendsObjects: state.friendsList.friendsObjects
    }
}

function mapDispatchToProps(dispatch){
    return {
        getFriendsList: () => dispatch( getFriendsList() ),
        removeFriend: id => dispatch( removeFriend(id) )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendsList));
