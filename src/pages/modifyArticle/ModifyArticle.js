import React, { Component } from 'react'
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import SimpleImage from '@editorjs/simple-image';

import './modifyArticle.css'

import { firstParagraph, getDate, isEmpty } from 'utility.js';
import AdminSkeleton from 'components/adminSkeleton/AdminSkeleton'
import FeaturedArticle from 'components/article/FeaturedArticle'

class ModifyArticle extends Component {
	constructor(props) {
        super(props);

        this.state = {
            editing: false,
            titre: "Titre",
            resume: "Début de l'article",
            thumbnail: null,
            editor: null,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    loadData() {

    }

    componentDidMount() {
        fetch(`http://localhost:3001/article?art_id=eq.${this.props.match.params.id}`).then(res => res.json()).then((article) => {
            if(!isEmpty(article)) {
                article = article[0];
                console.log(JSON.parse(article.art_contenu));
                this.setState({
                    editing: true,
                    titre: article.art_titre,
                    resume: firstParagraph(JSON.parse(article.art_contenu)),
                    thumbnail: article.art_thumbnail,
                    editor: new EditorJS({
                        holderId: 'content',
                        tools: {
                            header: Header,
                            image: SimpleImage,
                        },
                        autofocus: true,
                        onChange: () => {
                            this.saveChanges();
                        },
                        data: JSON.parse(article.art_contenu),
                    })
                });
            } else {
                this.setState({ 
                    editor: new EditorJS({
                        holderId: 'content',
                        tools: {
                            header: Header,
                            image: SimpleImage,
                        },
                        autofocus: true,
                        onChange: () => {
                            this.saveChanges();
                        }
                    })
                });
            }
        });
    }

    saveChanges() {
        this.state.editor.save().then((outputData) => {
            this.setState({ resume: firstParagraph(outputData) });
        }).catch((error) => {
            console.log('Saving failed: ', error);
        });
    }

    handleChange(event) {
        this.setState({titre: event.target.value});
    }

    loadThumbnail(e) {
        if(e.target.files[0]) {
            const formData  = new FormData();
            formData.append('file', e.target.files[0]);

            fetch('http://localhost:7958/upload', {
                method: 'POST',
                body: formData,
            }).then(res => res.json()).then((path) => {
                this.setState({ thumbnail: path['endpoint'] });
            }).catch(() => {
                console.log("Impossible de sauvegarder l'image.")
            });
        }
    }

    defaultThumbnail(color) {
        if(color === "red") {
            this.setState({ thumbnail: "/files/default-red.png" });
        } else {
            this.setState({ thumbnail: "/files/default-gray.png" });
        }
    }

    save() {
        this.state.editor.save().then((outputData) => {
            fetch(`http://localhost:3001/article${this.state.editing ? `?art_id=eq.${this.props.match.params.id}` : ''}`, {
                method: this.state.editing ? 'PATCH' : 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW5pc3RyYXRvciJ9._faAxIuXjrwIj9-5mgYVWGu4Kve2ek6g6YsNvd-nmmY'
                },
                body: JSON.stringify({
                    art_titre: this.state.titre,
                    art_thumbnail: this.state.thumbnail,
                    art_contenu: outputData,
                    art_date: getDate("postgres"),
                }),
            }).then(() => {
                this.props.history.push('/admin/articles');
            }).catch(() => {
                console.log("impossible d'enregistrer l'image");
            });
        }).catch((error) => {
            console.log('Saving failed: ', error);
        });
    }

    delete() {
        if(this.state.editing) {
            fetch(`http://localhost:3001/article?art_id=eq.${this.props.match.params.id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW5pc3RyYXRvciJ9._faAxIuXjrwIj9-5mgYVWGu4Kve2ek6g6YsNvd-nmmY'
                },
            }).then(() => {
                this.props.history.push('/admin/articles');
            });
        }
    }

    render() {
        return (
            <AdminSkeleton>
                <div className="title-head">
                    <h1> Edition </h1>
                    <span onClick={() => { this.delete() }}> Supprimer cet article </span>
                </div>

                <div id="edit-article">
                    <div className="head">
                        <div className="form">
                            <div className="titre">
                                <span> Titre (obligatoire) </span>
                                <input type="text" placeholder="Titre" value={this.state.titre} onChange={this.handleChange} />
                            </div>

                            <h3> Miniature </h3>
                            <span> Sélectionnez ou importez une image qui illustre l'article </span>
                            <div className="thumbnails">
                                <div className="import" style={(this.state.thumbnail === null || this.state.thumbnail === "/files/default-gray.png"  || this.state.thumbnail === "/files/default-red.png") ? null : {backgroundImage: `url('http://localhost:7958${this.state.thumbnail}')`}}>
                                    <img alt="icon" src="/icons/image.svg" style={(this.state.thumbnail === null || this.state.thumbnail === "/files/default-gray.png"  || this.state.thumbnail === "/files/default-red.png") ? null : {display: "none"}}/>
                                    <span style={(this.state.thumbnail === null || this.state.thumbnail === "/files/default-gray.png"  || this.state.thumbnail === "/files/default-red.png") ? null : {display: "none"}}> Importer une image </span>
                                    <input type="file" onChange={ (e) => this.loadThumbnail(e) } />
                                </div>
                                <div className="red" onClick={() => { this.defaultThumbnail('red')} }></div>
                                <div className="gray" onClick={() => { this.defaultThumbnail('gray')} }></div>
                            </div>
                        </div>
                        <div className="apercu">
                            <FeaturedArticle id={1} path={this.state.thumbnail} title={this.state.titre} date={ getDate("normal") } key="0" color={this.state.color}>
                                { this.state.resume }
                            </FeaturedArticle>
                        </div>
                    </div>
                    
                    <div id="content">
                    </div>

                    <span className="validate" onClick={ () => this.save() }> {this.state.editing ? "Valider les changements" : "Publier l'article" } </span>
                </div>
            </AdminSkeleton>
        );
    }
}

export default ModifyArticle;
