import React from "react";

export default class Friend extends React.Component {
    render(){
        return (
            <div>
                <img src="http://lorempixel.com/100/100/people" alt="Avatar"/>
                <h4 className="friend-name">{ this.props.name }</h4>

            </div>)
    }
}
