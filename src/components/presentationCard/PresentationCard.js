import React from 'react'
import './presentationCard.css'
import './presentationCardMobile.css'

class PresentationCard extends React.Component {
    render () {
        return <div className="presentation-card">
            <div className="card-head" style={{backgroundImage: `url(${this.props.path})`}}> </div>

            <div className="card-content">
                <h2 className="title"> {this.props.title} </h2>

                <p>
                    {this.props.children}
                </p>

                <button>
                    {this.props.callToAction}
                </button>
            </div>
        </div>
    }
}

export default PresentationCard;