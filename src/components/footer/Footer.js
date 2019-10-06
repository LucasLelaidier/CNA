import React from 'react'

import './footer.css'
import './footerMobile.css'

class Footer extends React.Component {
    
    render () {
        return <footer>
            <div id="footer-top">

            </div>

            <div id="footer-bot">
                
            </div>

            <div id="footer-mobile">
                <div className="foot-group active">
                    <i className="foot-nav" data-feather="home"></i>
                    <span className="nav-text"> Accueil </span>
                </div>

                <div className="foot-group">
                    <i className="foot-nav" data-feather="globe"></i>
                    <span className="nav-text"> Le club </span>
                </div>

                <div className="foot-group">
                    <i className="foot-nav" data-feather="grid"></i>
                    <span className="nav-text"> Activités </span>
                </div>
                
                <div className="foot-group">
                    <i className="foot-nav" data-feather="file-text"></i>
                    <span className="nav-text"> Articles </span>
                </div>
                <div className="foot-group">
                    <i className="foot-nav" data-feather="log-in"></i>
                    <span className="nav-text"> Connexion </span>
                </div>
            </div>
        </footer>
    }
}

export default Footer;