import React from 'react'
import './event.css'
import './eventMobile.css'
import feather from 'feather-icons'

class Event extends React.Component {

    componentDidMount() {
        feather.replace()
    }

    render() {
        return <div className="event">
            <i className="event-image" data-feather="alert-circle"></i>
            <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
            </p>
        </div>
    }
}

export default Event;