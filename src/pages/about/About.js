import React, { Component } from 'react'

import './about.css'

import 'components/memberPresentation/MemberPresentation'
import MemberPresentation from 'components/memberPresentation/MemberPresentation'

import Header from 'components/header/Header'
import Footer from 'components/footer/Footer'

class About extends Component {
    render() {
        return (
            <div id="about">
                <Header />
                <div className="stray grey">
                    <div className="container">
                        <h1 className="centered"> Les membres du CNA </h1>

                        <section className="members">
                            <MemberPresentation className="member" name="Cathy Jolivet" fonction="Présidente" contact="cna.presidence@gmail.com"/>
                            <MemberPresentation className="member" name="Valérie Véron" fonction="Trésorière" contact="cna.secretariat50@gmail.com"/>
                            <MemberPresentation className="member" name="Stany" fonction="Entraineur" contact="cna.stany@gmail.com"/>
                            <MemberPresentation className="member" name="Jesper Beauchamps" fonction="Trésorier" contact="02.12.53.99.08"/>
                        </section>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default About;