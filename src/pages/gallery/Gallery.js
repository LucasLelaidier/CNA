import React, { Component } from 'react'
import { isEmpty } from 'utility.js';

import './gallery.css'
import './galleryMobile.css'

import InfiniteScroll from 'components/infiniteScroll/InfiniteScroll'
import Image from 'components/image/Image'
import Header from 'components/header/Header'
import Footer from 'components/footer/Footer'

class GroupeAvenir extends Component {
    constructor(props) {
		super(props);

        this.state = {
            albums: [],
            album: 1,
        };
        
        this.scroller = React.createRef();
    }

    componentDidMount() {
        fetch(`http://localhost:3001/gallerie`)
            .then(res => res.json())
			.then((albums) => {
                if(!isEmpty(albums)) {
                    this.setState({ albums: albums });
                }
            });
    }

    loadData = (objectsPerPage, page, missing, callback, setLoading, setError) => {
        setLoading(true);
		fetch(`http://localhost:3001/image?gal_id=eq.${this.state.album}&limit=${missing > 0 ? missing : objectsPerPage}&offset=${missing > 0 ? parseFloat(objectsPerPage*page)+parseFloat(objectsPerPage-missing) : objectsPerPage*page}`)
			.then(res => res.json())
			.then((images) => {
				if(!isEmpty(images)) {
					let html= [];
					Array.from(images).forEach(image => {
						html.push(
							<Image name={image.ima_description} key={image.ima_id} />
						)
					});
					callback(html);
				}
				setLoading(false);
			}).catch(() => {
				setError();
			});
    }

    changeAlbum(id) {
        this.setState({ album: id}, () => {
            this.scroller.current.clear();
        })
    }

	render() {
        let albums = [];

        this.state.albums.forEach(album => {
			albums.push(
				<div className="album" onClick={() => this.changeAlbum(album.gal_id)} key={album.gal_id}>
                    <h2> {album.gal_nom} </h2>
                    <img alt="download" className="dl-icon" src="icons/download.svg" />
                </div>
			)
        });

		return (
            <div>
                <Header />
                <div className="stray grey">
                    <div className="container">
                        <h1> Albums </h1>

                        <section className="albums scrollbar">
                            { albums }
                        </section>
                        {/* <a className="more-link" href="/e"> Voir tous les albums </a> */}

                        <h1> Dernières images </h1>

                        <section className="images">
                            <InfiniteScroll ref={this.scroller} objectsPerPage="9" loadMore={this.loadData} />
                        </section>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default GroupeAvenir;