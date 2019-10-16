import React from 'react'

import './footer.css'
import './footerMobile.css'

import { Link } from "react-router-dom";

class Footer extends React.Component {
    
    render () {
        return <footer>
            <div id="footer-top">

            </div>

            <div id="footer-bot">
                
            </div>

            <div id="footer-mobile">
                <Link className="foot-group active" to="/">
                    <i className="foot-nav" data-feather="home"></i>
                    <span className="nav-text"> Accueil </span>
                </Link>

                <Link className="foot-group" to="/le-club">
                    <i className="foot-nav" data-feather="globe"></i>
                    <span className="nav-text"> Le club </span>
                </Link>

                <div className="foot-group">
                    <i className="foot-nav" data-feather="grid"></i>
                    <span className="nav-text"> Activités </span>
                </div>
                
                <Link className="foot-group" to="/articles">
                    <i className="foot-nav" data-feather="file-text"></i>
                    <span className="nav-text"> Articles </span>
                </Link>
                    
                <Link className="foot-group" to="/galerie">
                    <i className="foot-nav" data-feather="image"></i>
                    <span className="nav-text"> Galerie </span>
                </Link>
            </div>
        </footer>
    }
}

export default Footer;