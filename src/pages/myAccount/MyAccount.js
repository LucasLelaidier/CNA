import React, { Component } from 'react'

import './myAccount.css'

import Parameters from 'components/parameters/Parameters'

class MyAccount extends Component {

    render() {
        return (
            <div className="stray grey">
                <div className="container">
                    <h1 className="centered"> Espace personnel </h1>

                    <Parameters />

                    <Parameters />
                </div>
            </div>
        )
    }
}

export default MyAccount;