import React, { Component } from 'react'

import feather from 'feather-icons'

import './gallery.css'
import './galleryMobile.css'

class GroupeAvenir extends Component {
    constructor(props) {
		super(props);

        this.state = {
            images: [],
            album: {"id": 0, "title": "Dernières photos"}
		};

        this.scrolled = this.scrolled.bind(this);
        this.changeAlbum = this.changeAlbum.bind(this);
    }

    loadData(album) {
        if(album === 0 ) {
            return {
                "albums": [
                    {
                        "id": 1,
                        "title": "Meeting du muguet 2018",
                    },
                    {
                        "id": 2,
                        "title": "Championnat de normandie elbeuf 24 et 25 février 2018",
                    },
                    {
                        "id": 3,
                        "title": "Meeting du muguet 2017",
                    },
                ],
                "images": {
                    "album": "Dernières photos",
                    "links": [
                        "https://cerledesnageursavranches.fr/files/club-190503090/albums/album-3565/csc_0003_5af172dd9d79c.jpg",
                        "https://cerledesnageursavranches.fr/files/club-190503090/albums/album-3565/csc_0008_5af17324c2b0b.jpg",
                        "https://cerledesnageursavranches.fr/files/club-190503090/albums/album-3565/csc_0010_5af172c259ab9.jpg",
                        "https://cerledesnageursavranches.fr/files/club-190503090/albums/album-3565/csc_0012_5af1732a5de28.jpg",
                        "https://cerledesnageursavranches.fr/files/club-190503090/albums/album-3565/csc_0018_5af173217e618.jpg",
                        "https://cerledesnageursavranches.fr/files/club-190503090/albums/album-3565/csc_0019_5af172aab2cc1.jpg",
                        "https://cerledesnageursavranches.fr/files/club-190503090/albums/album-3565/csc_0012_5af1732a5de28.jpg",
                        "https://cerledesnageursavranches.fr/files/club-190503090/albums/album-3565/csc_0018_5af173217e618.jpg",
                        "https://cerledesnageursavranches.fr/files/club-190503090/albums/album-3565/csc_0019_5af172aab2cc1.jpg"
                    ]
                }
            }
        }
		else {
            return {
                "albums": [
                    {
                        "id": 1,
                        "title": "Meeting du muguet 2018",
                    },
                    {
                        "id": 2,
                        "title": "Championnat de normandie elbeuf 24 et 25 février 2018",
                    },
                    {
                        "id": 3,
                        "title": "Meeting du muguet 2017",
                    },
                ],
                "images": {
                    "album": "Meeting du muguet 2018",
                    "links": [
                        "https://cerledesnageursavranches.fr/files/club-190503090/albums/album-3565/dsc_0024_2_5af17b22cfc32.jpg",
                        "https://cerledesnageursavranches.fr/files/club-190503090/albums/album-3565/dsc_0025_2_5af17c3a06c22.jpg",
                        "https://cerledesnageursavranches.fr/files/club-190503090/albums/album-3565/dsc_0026_2_5af17b55a6476.jpg",
                        "https://cerledesnageursavranches.fr/files/club-190503090/albums/album-3565/dsc_0027_2_5af17bc577457.jpg",
                        "https://cerledesnageursavranches.fr/files/club-190503090/albums/album-3565/dsc_0028_5af17cb7d596d.jpg",
                        "https://cerledesnageursavranches.fr/files/club-190503090/albums/album-3565/dsc_0028_2_5af17bdb3bd6b.jpg",
                        "https://cerledesnageursavranches.fr/files/club-190503090/albums/album-3565/dsc_0028_3_5af17b8e186b4.jpg",
                        "https://cerledesnageursavranches.fr/files/club-190503090/albums/album-3565/dsc_0030_5af17cf234871.jpg",
                        "https://cerledesnageursavranches.fr/files/club-190503090/albums/album-3565/dsc_0032_5af17d5c2c4e0.jpg"
                    ]
                }
            }
        }
    }

    scrolled(e) {
		var scrollHeight, totalHeight;
		scrollHeight = document.body.scrollHeight;
		totalHeight = window.scrollY + window.innerHeight;

		if(totalHeight + 50 >= scrollHeight)
		{
			this.updateItems();
		}
    }
    
    updateItems() {
		let tempState = this.state.images;
		let data = this.loadData(this.state.album.id);
        let index = 0;

		data["images"]["links"].forEach(link => {
			tempState.push(
				<div className="image" style={{backgroundImage: "url(" + link + ")"}} key={index}></div>
            )
            index++;
		});

		this.setState({
			images: tempState
		})
	}
    
    changeAlbum(json) {
        this.setState(json,
            () => {this.updateItems()}
        );
    }

    componentDidMount() {
        feather.replace();
        this.updateItems();
        window.addEventListener('scroll', this.scrolled);
    }

	render() {
        let data = this.loadData();
        let albums = [];

        data["albums"].forEach(album => {
			albums.push(
				<div className="album" onClick={() => this.changeAlbum({images: [], album: album})} key={album.id}>
                    <h2> {album.title} </h2>
                    <i className="dl-icon" data-feather="download"></i>
                </div>
			)
        });
        
		return (
            <div>
                <div className="stray grey">
                    <div className="container">
                        <h1> Albums </h1>

                        <section className="albums">
                            {albums}
                        </section>
                        {/* <a className="more-link" href="/e"> Voir tous les albums </a> */}


                        <h1> {this.state.album.title} </h1>

                        <section className="images">
                            {this.state.images}                            
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default GroupeAvenir;