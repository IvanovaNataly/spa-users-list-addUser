import React from "react";

export default class Friend extends React.Component {
    render(){

        return (<div>
            <h4 className="friend-name">{ this.props.name }</h4>

        </div>)
    }
}
