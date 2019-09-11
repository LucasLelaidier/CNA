import React from 'react'
import './event.css'
import feather from 'feather-icons'

class Event extends React.Component {

    componentDidMount() {
        feather.replace()
    }

    render() {
        return <div class="event">
            <i class="event-image" data-feather="alert-circle"></i>
            <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
            </p>
        </div>
    }
}

export default Event;