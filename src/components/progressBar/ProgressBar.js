import React from 'react'
import './progressBar.css'

class ProgressBar extends React.Component {
    render () {
        return <div className="progress-bar">
            <ul className="list-unstyled multi-steps">
                <li> Création du compte </li>
                <li className="is-active"> Inscription </li>
                <li> Finalisation </li>
            </ul>
        </div>
    }
}

export default ProgressBar;
