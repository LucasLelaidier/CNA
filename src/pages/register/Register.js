import React from 'react'
import './register.css'

class Register extends React.Component {
    render () {
        return <div className="stray grey">
            <div className="container form">
                <form>
                    <div class="info">
                        <label for="name"> Nom </label>
                        <input id="name" type="texte" name="name"/>
                    </div>

                    <div class="info wrong">
                        <label for="firstname"> Prénom </label>
                        <input id="firstname" type="texte" name="firstname" placeholder="Ce champ est obligatoire"/>
                    </div>
                </form>
            </div>
        </div>
    }
}

export default Register;
