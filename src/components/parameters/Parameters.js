import React, { Component } from 'react'

import './parameters.css'

class Parameters extends Component {

    render() {
        return (
            <div class="parameters-bloc">
                <h2> Membres du CNA </h2>
                <section>
                    <div class="parameter"> 
                        <span> Changer de mot de passe </span>
                    </div>

                    <div class="parameter">
                        <span> Voir les données personelles enregistrées </span>
                    </div>

                    <div class="parameter">
                        <span> Supprimer son compte </span>
                    </div>
                </section>
            </div>
        )
    }
}

export default Parameters;
