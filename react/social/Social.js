import React from "react";
import Users from "./users/Users";
import About from "./about/About";
import Navigation from "./header/Navigation";
import FriendsList from "./friends/FriendsList";
import {Route} from "react-router";

export default class Social extends React.Component{
    render(){
        return (
            <div>
                <Navigation/>
                <Route path="/friends" component={FriendsList}/>
                <Route path="/users" component={Users}/>
                <Route exact path="/" component={About}/>
            </div>
        )
    }
}
