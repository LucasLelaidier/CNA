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
                    "day": "05",
                    "month": "octobre",
                    "content": "1er District, Compétition Départementale en bassin de 25m à GRANVILLE",
                    "poll": "cna"
                },
                {
                    "id": 2,
                    "day": 13,
                    "month": "juillet",
                    "content": "Championnats de l'Ouest Jeunes, Compétition Nationale en bassin de 50m à NANTES",
                    "poll": "none"
                },
                {
                    "id": 3,
                    "day": 13,
                    "month": "juillet",
                    "content": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
                    "poll": "none"
                },
                {
                    "id": 4,
                    "day": 13,
                    "month": "juillet",
                    "content": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
                    "poll": "none"
                },
                {
                    "id": 5,
                    "day": "02",
                    "month": "juin",
                    "content": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
                    "poll": "none"
                },
            ]
        }
    }

    render() {
        let events = [];
        let smallEvents = [];
        let htmlEvents = [];
        let json = this.loadData();

        json['events'].forEach(event => {
            // Small events
            if(smallEvents.length < 2) {
                smallEvents.push(
                    <div className="event" key={event.id}>
                        <div className="event-head">
                            <div className="day-number-small"> 
                                <span className="jour"> { event.day } </span> 
                                <span className="month"> { event.month } </span> 
                            </div>
                            <p>
                                {event.content}
                            </p>
                        </div>
                        { event.poll !== 'none' ? <Poll callToAction = "Je participe" /> : null }
                    </div>
                )
            }
            //Big events
            if(!(event.day + "-" + event.month in events)) {
                events[event.day + "-" + event.month] = [];
            }
            events[event.day + "-" + event.month].push(
                <div className='event' key={event.id}> <p> {event.content} </p> { event.poll !== 'none' ? <Poll callToAction = "Je participe" /> : null } </div>
            );
        });

        for(let key in events) {
            let splittedKey = key.split("-");
            htmlEvents.push(
                <div className="day" key={key}>
                    <div className="day-number"> 
                        <span className="jour"> { splittedKey[0] } </span> 
                        <span className="month"> { splittedKey[1] } </span> 
                    </div>
                    <div className="day-events">
                        { events[key] }
                    </div>
                </div>
            )
        }

        return <div className="calendar">
            <div id="events-small" className={!this.state.isActive ? 'hidden' : ''}>
                { smallEvents }
            </div>

            <div id="events-big" className={this.state.isActive ? 'hidden' : ''}>
                { htmlEvents }
            </div>

            <span className="more" onClick={this.changeState}> {this.state.spanContent} </span>
        </div>
    }
}

export default Event;