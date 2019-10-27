import React, { Component } from 'react'

import './poll.css'

import feather from 'feather-icons'

class Poll extends Component {
    componentDidMount() {
        feather.replace()
    }

    loadData() {
        return {
            "participants" : [
                { 
                    "id": 1,
                    "name": "Lucas",
                    "firstname": "Lelaidier",
                    "profil": "/fake_users/32.jpg"
                },
                { 
                    "id": 2,
                    "name": "Michel",
                    "firstname": "Dutroux",
                    "profil": "/fake_users/43.jpg"
                },
                { 
                    "id": 3,
                    "name": "Anne",
                    "firstname": "Claire",
                    "profil": "/fake_users/44.jpg"
                }
            ]
        }
    }
    
    render() {
        let participants = [];
        let json = this.loadData();
        let oversize = 0;

        json["participants"].forEach(participant => {
            if(participants.length < 5) {
                participants.push(
                    <img alt={ participant.name } src={ participant.profil }/>
                )
            }
            else {
                oversize++;
            }
        });

        participants.push(<div className="oversize"> { oversize }+ </div>)

        return (
            <div className="poll">
                <div className="participants">
                    {participants}
                </div>

                <div className="link">
                    <i className="baricon" data-feather="bar-chart-2"></i>
                    <span> { this.props.callToAction } </span>
                </div>
            </div>
        )
    }
}

export default Poll;