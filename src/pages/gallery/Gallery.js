import React, { Component } from 'react'
import './gallery.css'

import Header from 'components/header/Header'
import Footer from 'components/footer/Footer'

class GroupeAvenir extends Component {
	render() {
		return (
            <body>
                <Header logoPath="public\email.svg" />

                <div className="container grey">
                    <h1> Albums </h1>

                    <section className="albums">
                        <div className="album">
                            <h2> Meeting du muguet 2018 </h2>
                            <i className="dl-icon" data-feather="download"></i>
                        </div>

                        <div className="album">
                            <h2> Championnat de normandie elbeuf 24 et 25 février 2018 </h2>
                            <i className="dl-icon" data-feather="download"></i>
                        </div>

                        <div className="album">
                            <h2> Meeting du muguet 2017 </h2>
                            <i className="dl-icon" data-feather="download"></i>
                        </div>
                    </section>

                    <h1> Dernières photos </h1>

                    <section className="images">
                        <div class="image" style={{backgroundImage: `url(https://images.unsplash.com/photo-1545161296-d9c2c241f2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)`}}></div>
                        <div class="image" style={{backgroundImage: `url(https://images.unsplash.com/photo-1545161296-d9c2c241f2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)`}}></div>
                        <div class="image" style={{backgroundImage: `url(https://images.unsplash.com/photo-1545161296-d9c2c241f2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)`}}></div>
                        <div class="image" style={{backgroundImage: `url(https://images.unsplash.com/photo-1545161296-d9c2c241f2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)`}}></div>
                        <div class="image" style={{backgroundImage: `url(https://images.unsplash.com/photo-1545161296-d9c2c241f2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)`}}></div>
                        <div class="image" style={{backgroundImage: `url(https://images.unsplash.com/photo-1545161296-d9c2c241f2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)`}}></div>
                        <div class="image" style={{backgroundImage: `url(https://images.unsplash.com/photo-1545161296-d9c2c241f2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)`}}></div>
                    </section>
                </div>

                <Footer />
            </body>
        )
    }
}

export default GroupeAvenir;