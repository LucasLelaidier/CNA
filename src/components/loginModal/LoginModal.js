import React from 'react'
import './loginModal.css'
import './loginModalMobile.css'

class LoginModal extends React.Component {
    render () {
        return <div id="open-modal" className="modal-window">
            <div>
                <a href="# " title="Fermer" className="modal-close"> Fermer </a>
                <h2> Connexion </h2>
                <form method="post">
                    <div className="section address">
                        <div className="info wide">
                            <label htmlFor="name"> Adresse mail </label>
                            <input id="name" type="texte" name="name" autoComplete="email"/>
                        </div>

                        <div className="info wide">
                            <label htmlFor="name"> Mot de passe </label>
                            <input id="name" type="password" name="name" autoComplete="current-password"/>
                        </div>
                    </div>
                    <input id="submit" type="submit" value="Se connecter"/>
                </form>
            </div>
        </div>
    }
}

export default LoginModal;
