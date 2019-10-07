import React from 'react'
import './event.css'
import './eventMobile.css'
import feather from 'feather-icons'

class Event extends React.Component {

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

    render() {
        return <div className="calendar">
            <div id="events-small" className={!this.state.isActive ? 'hidden' : ''}>
                <div className="event">
                    <i className="event-image" data-feather="alert-circle"></i>
                    <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
                    </p>
                </div>

                <div className="event">
                    <i className="event-image" data-feather="alert-circle"></i>
                    <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
                    </p>
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
                            <i className="event-image" data-feather="alert-circle"></i>
                            <p>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
                            </p>
                        </div>

                        <div className="event">
                            <i className="event-image" data-feather="alert-circle"></i>
                            <p>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
                            </p>
                        </div>

                        <div className="event">
                            <i className="event-image" data-feather="alert-circle"></i>
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
                            <i className="event-image" data-feather="alert-circle"></i>
                            <p>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
                            </p>
                        </div>

                        <div className="event">
                            <i className="event-image" data-feather="alert-circle"></i>
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