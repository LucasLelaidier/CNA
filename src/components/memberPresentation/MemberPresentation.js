import React, { Component } from 'react'

import './memberPresentation.css'
import './memberPresentationMobile.css'

class MemberPresentation extends Component {
    render() {
        return (
            <div className="memberPresentation">
                <h2> {this.props.name} </h2>
                <span className="fonction"> {this.props.fonction} </span>
                <span className="mail"> {this.props.contact} </span>
            </div>
        )
    }
}

export default MemberPresentation;