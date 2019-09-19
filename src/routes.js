import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
 
import HomePage from 'pages/homePage/HomePage'
import GroupeAvenir from 'pages/GroupeAvenir/GroupeAvenir'
 
export default function MainRouter () {
    return (
        <Router>
            <div>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/home" component={HomePage}/>
                <Route exact path="/groupe-avenir" component={GroupeAvenir}/>
            </div>
        </Router>
    )
}