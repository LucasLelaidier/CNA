import React from 'react'
import './galerieAdministration.css'

import InfiniteScroll from 'components/infiniteScroll/InfiniteScroll'
import { isEmpty } from 'utility.js';
import { Link } from "react-router-dom";
import Image from 'components/image/Image'
import AdminSkeleton from 'components/adminSkeleton/AdminSkeleton'

class GalerieAdministration extends React.Component {
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
    
    uploadPictures(e) {
        if(e.target.files) {
            const album = this.state.album;
            const name = this.getAlbumName(this.state.album);
            const dashed = this.getDashedName(name);

            Array.from(e.target.files).forEach(image => {
                const formData  = new FormData();
                formData.append('file', image);
                formData.append('name', `${dashed}/${image.name}`);
                
                fetch('http://localhost:7958/upload', {
                    method: 'POST',
                    body: formData,
                }).then(res => res.json()).then((path) => {
                    fetch('http://localhost:3001/image', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW5pc3RyYXRvciJ9._faAxIuXjrwIj9-5mgYVWGu4Kve2ek6g6YsNvd-nmmY'
                        },
                        body: JSON.stringify({
                            ima_description: path['endpoint'],
                            gal_id: album,
                        }),
                    });
                }).catch(() => {
                    console.log("Impossible de sauvegarder l'image.")
                }); 
            });
        }
    }

    render() {
        let albums = [];

        this.state.albums.forEach(album => {
			albums.push(
				<div className="album" onClick={() => this.changeAlbum(album.gal_id)} key={album.gal_id}>
                    <h2> {album.gal_nom} </h2>
                    <i className="dl-icon" data-feather="download"></i>
                </div>
			)
        });
        console.log(this.state.albums);
        return (
            <div>
                <AdminSkeleton page="3">
					<div className="title-head">
						<h1> Gérer les albums </h1>
						<Link to="/admin/article/0"> Nouvelle galerie </Link>
					</div>

                    <section className="albums">
                        { albums }
                    </section>

                    <input type="file" id="file" onChange={ (e) => this.uploadPictures(e) } multiple="multiple" />
                    <label className="btn" htmlFor="file"> Ajouter des images à { this.getAlbumName(this.state.album) } </label>
                    
                    <section id="administration-images">
						<InfiniteScroll ref={this.scroller} objectsPerPage="9" loadMore={this.loadData} />
                    </section>
                </AdminSkeleton>
            </div>
        )
    }


    getAlbumName(id) {
        for(let i = 0; i < this.state.albums.length; i++) {
            if(this.state.albums[i].gal_id === id) {
                return this.state.albums[i].gal_nom;
            }
        }
    }

    getDashedName(string) {
        return string.replace(/\W+(?!$)/g, '-').toLowerCase();
    }
}

export default GalerieAdministration;