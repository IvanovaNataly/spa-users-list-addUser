import React from 'react';

export default class Notification extends React.Component {
    render() {
             return (
            <div className="notification hidden">

                {this.props.user.name} is your new friends now. Send him your greetings?

            </div>
        )
    }
}
