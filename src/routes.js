import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
 
import HomePage from 'pages/homePage/HomePage'
import GroupeAvenir from 'pages/groupeAvenir/GroupeAvenir'
import Gallery from 'pages/gallery/Gallery'
import Register from 'pages/register/Register'

import LoginModal from 'components/loginModal/LoginModal'
import Header from 'components/header/Header'
import Footer from 'components/footer/Footer'

export default function MainRouter () {
    return (
        <Router>
            <LoginModal />
            <Header logoPath="public\email.svg" />
            <div>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/home" component={HomePage}/>
                <Route exact path="/groupe-avenir" component={GroupeAvenir}/>
                <Route exact path="/galerie" component={Gallery}/>
                <Route exact path="/inscription" component={Register}/>
            </div>
            <Footer />
        </Router>
    )
}