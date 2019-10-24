import React, { Component } from 'react'

import './event.css'
import './eventMobile.css'

import feather from 'feather-icons'
import Poll from 'components/poll/Poll'

class Event extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isActive: true,
            spanContent: "Voir toutes les dates"
        }

        this.changeState = this.changeState.bind(this);
    }

    changeState() {
        this.setState(state => ({
            spanContent: state.isActive ? "Voir moins de dates" : "Voir toutes les dates",
            isActive: !state.isActive
        }));
    }

    componentDidMount() {
        feather.replace()
    }

    loadData() {
        return {
            "events": [
                {
                    "id": 1,
                    "day": 5,
                    "month": "octobre",
                    "content": "1er District, Compétition Départementale en bassin de 25m à GRANVILLE"
                },
                {
                    "id": 2,
                    "day": 13,
                    "month": "juillet",
                    "content": "Championnats de l'Ouest Jeunes, Compétition Nationale en bassin de 50m à NANTES"
                },
                {
                    "id": 2,
                    "day": 13,
                    "month": "juillet",
                    "content": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
                },
                {
                    "id": 2,
                    "day": 13,
                    "month": "juillet",
                    "content": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
                },
                {
                    "id": 2,
                    "day": 2,
                    "month": "juin",
                    "content": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
                },
            ]
        }
    }

    render() {
        let events = [];
        let json = this.loadData();

        json['events'].forEach(event => {
            events[event.day + " " + event.month] += <div className='event'> <p> {event.content} </p> </div>
        });

        return <div className="calendar">
            <div id="events-small" className={!this.state.isActive ? 'hidden' : ''}>
                <div className="event">
                    <div class="event-head">
                        <i className="event-image" data-feather="alert-circle"></i>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
                        </p>
                    </div>
                    <Poll className="survey"/>
                </div>

                <div className="event">
                    <div class="event-head">
                        <i className="event-image" data-feather="alert-circle"></i>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
                        </p>
                    </div>
                </div>
            </div>

            <div id="events-big" className={this.state.isActive ? 'hidden' : ''}>
                <div className="day">
                    <div className="day-number"> 
                        <span className="jour"> 25 </span> 
                        <span className="month"> Mai </span> 
                    </div>

                    <div className="day-events">
                        <div className="event">
                            <p>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
                            </p>

                            <Poll/>
                        </div>

                        <div className="event">
                            <p>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
                            </p>
                        </div>

                        <div className="event">
                            <p>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="day">
                    <div className="day-number"> 
                        <span className="jour"> 03 </span> 
                        <span className="month"> Juin </span> 
                    </div>
                    
                    <div className="day-events">
                        <div className="event">
                            <p>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
                            </p>
                        </div>

                        <div className="event">
                            <p>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <span className="more" onClick={this.changeState}> {this.state.spanContent} </span>
        </div>
    }
}

export default Event;