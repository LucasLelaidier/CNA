import React, { Component } from 'react'

import './poll.css'

import feather from 'feather-icons'

class Poll extends Component {
    componentDidMount() {
        feather.replace()
    }
    
    render() {
        return (
            <div className="poll">
                <div className="participants">
                    <img alt="participant" src="/fake_users/32.jpg"/>
                    <img alt="participant" src="/fake_users/43.jpg"/>
                    <img alt="participant" src="/fake_users/44.jpg"/>
                </div>

                <div className="link">
                    <i className="baricon" data-feather="bar-chart-2"></i>
                    <span> Répondre au sondage </span>
                </div>
            </div>
        )
    }
}

export default Poll;