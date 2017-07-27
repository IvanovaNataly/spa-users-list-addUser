import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import "./notification.scss";

export default class Notification extends React.Component {
    render() {
        return (
            <CSSTransitionGroup
                transitionName="fade"
                transitionEnter={false}
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionLeaveTimeout={1500}
            >
                <div className={"notification " + this.props.specialClass}>
                    {this.props.msg}
                </div>
            </CSSTransitionGroup>
        )
    }
}


