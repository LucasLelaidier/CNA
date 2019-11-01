import React, { Component } from 'react'

import './memberPresentation.css'
import './memberPresentationMobile.css'

class MemberPresentation extends Component {
    render() {
        return (
            <div className="memberPresentation">
                <img className="member-img" src={this.props.path} alt="member photography"/>
                <div className="content">
                    <span className="big name"> {this.props.name} </span>
                    <span className="role"> {this.props.fonction} </span>
                    <span className="contact"> {this.props.contact} </span>
                </div>
            </div>
        )
    }
}

export default MemberPresentation;