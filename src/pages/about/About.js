import React, { Component } from 'react'

import './about.css'

import 'components/memberPresentation/MemberPresentation'
import MemberPresentation from 'components/memberPresentation/MemberPresentation'

class About extends Component {
    render() {
        return (
            <div id="about">
                <div className="stray grey">
                    <div className="container">
                        <h1 className="centered"> Les membres du CNA </h1>

                        <section className="members">
                            <MemberPresentation className="member" path="/fake_users/32.jpg" name="Didier Desforges" fonction="entraîneur" contact="02.40.76.18.81"/>
                            <MemberPresentation className="member" path="/fake_users/43.jpg" name="Jesper Beauchamps" fonction="Trésorier" contact="02.12.53.99.08"/>
                            <MemberPresentation className="member" path="/fake_users/44.jpg" name="Jesper Beauchamps" fonction="Trésorier" contact="02.12.53.99.07"/>
                            <MemberPresentation className="member" path="/fake_users/65.jpg" name="Jesper Beauchamps" fonction="Trésorier" contact="02.12.53.99.08"/>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;