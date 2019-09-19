import React, { Component } from 'react'
import './groupeAvenir.css'

import Header from 'components/header/Header'
import Footer from 'components/footer/Footer'

class GroupeAvenir extends Component {
	render() {
		return (
            <body>
                <Header logoPath="public\email.svg" />
                
                <div className="container grey">
                    <h1> Natation de course - Groupe Avenir </h1>

                    <div className="presentations">
                        <div className="presentation">
                            <h2> Critères d'accès </h2>

                            <p>
                                Groupe visant la compétition, filles nées en 2005 et avant, garçons née en 2004 et avant
                            </p>
                        </div>

                        <div className="presentation">
                            <h2> Objectifs </h2>

                            <p>
                                Objectifs : niveau départemantale visant des qualifications de niveau régionale.<br/>
                                Participation aux inter-clubs toutes catégories, aux compétitions district, départementale voir régionale
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="container white">
                    <h1 className="centered"> Horaires </h1>
                    <ul className="horaires centered">
                        <li> Lundi - 19h30 à 21h </li>
                        <li> Mardi - 19h30 à 20h </li>
                        <li> Mercredi - 19h30 à 21h </li>
                        <li> Jeudi - 18h à 19h </li>
                        <li> Samedi - 19h30 à 21h </li>
                    </ul>
                </div>

                <div className="container grey">
                    <h1> Contenu associé </h1>

                    <div className="associated">
                        <div className="element">
                            District
                            <i className="chevron" data-feather="chevron-right"></i>
                        </div>

                        <div className="element">
                            Jeunes
                            <i className="chevron" data-feather="chevron-right"></i>
                        </div>

                        <div className="element">
                            Région
                            <i className="chevron" data-feather="chevron-right"></i>
                        </div>
                    </div>
                </div>

                <Footer />
            </body>
        )
    }
}

export default GroupeAvenir;