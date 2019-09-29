import React, { Component } from 'react'
import './gallery.css'
import './galleryMobile.css'

class GroupeAvenir extends Component {
	render() {
		return (
            <body>
                <div className="stray grey">
                    <div className="container">
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
                            <div className="album">
                                <h2> Meeting du muguet 2017 </h2>
                                <i className="dl-icon" data-feather="download"></i>
                            </div>
                        </section>
                        <a className="more-link" href="/e"> Voir tous les albums </a>


                        <h1> Dernières photos </h1>

                        <section className="images">
                            <div className="image" style={{backgroundImage: `url(https://images.unsplash.com/photo-1545161296-d9c2c241f2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)`}}></div>
                            <div className="image" style={{backgroundImage: `url(https://images.unsplash.com/photo-1545161296-d9c2c241f2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)`}}></div>
                            <div className="image" style={{backgroundImage: `url(https://images.unsplash.com/photo-1545161296-d9c2c241f2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)`}}></div>
                            <div className="image" style={{backgroundImage: `url(https://images.unsplash.com/photo-1545161296-d9c2c241f2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)`}}></div>
                            <div className="image" style={{backgroundImage: `url(https://images.unsplash.com/photo-1545161296-d9c2c241f2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)`}}></div>
                            <div className="image" style={{backgroundImage: `url(https://images.unsplash.com/photo-1545161296-d9c2c241f2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)`}}></div>
                            <div className="image" style={{backgroundImage: `url(https://images.unsplash.com/photo-1545161296-d9c2c241f2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)`}}></div>
                        </section>
                    </div>
                </div>
            </body>
        )
    }
}

export default GroupeAvenir;