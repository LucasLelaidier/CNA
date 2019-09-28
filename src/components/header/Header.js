import React from 'react'
import './header.css'

class Header extends React.Component {
    render () {
        return <div>
            <header className="header">
                <div className="header-content">
                    <div className="left">
                        <img alt="logo" id="logoHeader" src={process.env.PUBLIC_URL + '/logoCNA_full.svg'}/>
                    </div>

                    <div className="right">
                        <ul className="navbar"> 
                            <li> <a href="e"> Acceuil </a> </li>      
                            <a href="e"> <li> Le club </li></a>
                            <li>
                                Activités 
                                <ul className="dropdown">
                                    <li> 
                                        <a href="e"> Natation de course </a>
                                        <i className="chevron" data-feather="chevron-right"></i>
                                        <ul className="dropdown side">
                                            <a href="/groupe-avenir"><li>  Avenir </li> </a>
                                            <a href="e"> <li> Departement </li></a>
                                            <a href="e"> <li> District </li></a>
                                            <a href="e"> <li> Aquagym </li></a>
                                        </ul>
                                    </li>
                                    <li> <a href="e">Groupe maître</a> </li>
                                    <li> <a href="e">Groupe loisir</a> </li>
                                    <li> <a href="e">Aquagym</a> </li>
                                </ul>
                            </li>
                            <li> <a href="e">articles </a> </li>
                        </ul>
                    </div>
                </div>
            </header>
            <div class="important">
                <span> Les réinscriptions 2019 se terminent le 20 septembre ! </span>
                <i className="close" data-feather="x"></i>
            </div>
        </div>
    }
}

export default Header