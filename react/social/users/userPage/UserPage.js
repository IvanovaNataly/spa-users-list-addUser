import React from "react";
import {connect} from "react-redux";
import UserDetails from "./UserDetails";
import UserPosts from "./UserPosts"
import {getUser, addToFriends} from "../../../actions/creators"

import "./user-page.scss";


class UserPage extends React.Component {

    constructor(props){
        super(props);

        if( props.match.params.id ){
            props.getUser(props.match.params.id);
        }
    }

    componentWillReceiveProps( {match} ){
        if( match.params.id &&  match.params.id != this.props.match.params.id){
            this.props.getUser(match.params.id);
        }
    }

    onAddToFriends() {
        this.props.addToFriends(this.props.user);
    }

    render(){
        if(this.props.isLoading)
            return <main className="user-page">Loading...</main>;

        return (<main className="user-page">
                    <button className="btn-add-friend" onClick={this.onAddToFriends.bind(this)}>Add To Friends</button>
                    <UserDetails user={ this.props.user }/>
                    <UserPosts posts={ this.props.posts }/>
                </main>)
    }
}

function mapStateToProps(state){
    return {
        isLoading: state.friends.selectedUser.isLoading,
        user: state.friends.selectedUser.details,
        posts: state.friends.selectedUser.posts
    }
}

function mapDispatchToProps(dispatch){
    return {
        getUser: id => dispatch( getUser(id) ),
        addToFriends: user => dispatch( addToFriends(user) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
