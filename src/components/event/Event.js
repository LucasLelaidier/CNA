import React from 'react'
import './event.css'
import './eventMobile.css'
import feather from 'feather-icons'

class Event extends React.Component {

    componentDidMount() {
        feather.replace()
    }

    render() {
        return <div className="calendar">
            <div id="events-small">
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

            <div id="events-big">
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

            <span className="more"> Voir toutes les dates </span>
        </div>
    }
}

export default Event;