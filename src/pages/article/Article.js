import React, { Component } from 'react'

import './article.css'

import Header from 'components/header/Header'
import Footer from 'components/footer/Footer'   

class Article extends Component {
	constructor(props) {
        super(props);

        this.state = {
            id: 0,
            article: [],
		};
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        let id = this.props.match.params.id;

        if(id !== 0) {
            fetch(`http://localhost:3001/article?art_id=eq.${id}`)
                .then(res => res.json())
                .then((article) => {
                    this.setState({ article: article[0] })
                });
        } 
    }

    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    parseEditorJson() {
        if(!this.isEmpty(this.state.article)) {
            let json = JSON.parse(this.state.article.art_contenu);
            console.log(this.state.article);
            let html = [];
            json["blocks"].forEach(block => {
                switch(block["type"]) {
                    case "paragraph":
                        html.push(<p> { block["data"]["text"] } </p>);
                        break;
                    default:
                        break;
                }
            });
            return html;
        }
        return "Chargement...";
    }

    render() {
        return (
            <div>
                <Header />
                <div className="stray grey">
                    <div id="article" className="container">
                        <h1 className="centered"> {this.state.article.art_titre} </h1>

                        <div className="illustration" style={{backgroundImage: `url(http://localhost:7958${this.state.article.art_thumbnail})`}}></div>

                        <div className="content">
                            <p>
                                { this.parseEditorJson() }
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Article;