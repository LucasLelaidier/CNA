import React from 'react'
import './register.css'

class Register extends React.Component {
    render () {
        return <div className="stray grey">
            <div className="container form">
                <form>
                    <div class="section civilite">
                        <div className="info">
                            <label htmlFor="name"> Nom </label>
                            <input id="name" type="texte" name="name" autoComplete="family-name"/>
                        </div>
                    
                        <div className="info wrong">
                            <label htmlFor="firstname"> Prénom </label>
                            <input id="firstname" type="texte" name="firstname" placeholder="Ce champ est obligatoire" autoComplete="given-name"/>
                        </div>

                        <div className="info small">
                            <label htmlFor="birthday"> Date de naissance </label>
                            <input id="birthday" type="date" name="birthday" autoComplete="bday"/>
                        </div>
                    </div>

                    <div class="section address">
                        <div className="info">
                            <label htmlFor="city"> Ville </label>
                            <input id="city" type="texte" name="city" autoComplete="address-level2"/>
                        </div>
                    
                        <div className="info">
                            <label htmlFor="address"> Adresse </label>
                            <input id="address" type="texte" name="address" autoComplete="address-line1"/>
                        </div>

                        <div className="info small">
                            <label htmlFor="postal"> Code postal </label>
                            <input id="postal" type="texte" name="postal" autoComplete="postal-code"/>
                        </div>

                        <div className="info wide">
                            <label htmlFor="complement"> Complément d'adresse </label>
                            <input id="complement" type="texte" name="complement" autoComplete="address-level3"/>
                        </div>
                    </div>

                    <input id="submit" type="submit" value="Suivant"/>
                </form>
            </div>
        </div>
    }
}

export default Register;
