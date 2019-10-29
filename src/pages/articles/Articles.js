import React, { Component } from 'react'

import './articles.css'

import FeaturedArticle from 'components/article/FeaturedArticle'

class Articles extends Component {
	constructor(props) {
		super(props);

        this.state = {
            articles: []
		};

		this.scrolled = this.scrolled.bind(this);
	}

    loadData() {
		return {
			"articles": [
				{
					"id": 1,
					"thumbnail" : "https://cerledesnageursavranches.fr/files/club-190503090/actualites/actualite_31708.jpg",
					"description" : "I have some blocks that I want to layout individually on the page, however I also want them to update wh..."
				},
				{
					"id": 2,
					"thumbnail" : "https://cerledesnageursavranches.fr/files/club-190503090/actualites/actualite_33130.jpg",
					"description" : "I have some blocks that I want to layout individually on the page, however I also want them to update wh..."
				},
				{
					"id": 3,
					"thumbnail" : "https://cerledesnageursavranches.fr/files/club-190503090/actualites/actualite_31226.jpg",
					"description" : "I have some blocks that I want to layout individually on the page, however I also want them to update wh..."
				},
				{
					"id": 4,
					"thumbnail" : "https://cerledesnageursavranches.fr/files/club-190503090/actualites/actualite_31226.jpg",
					"description" : "I have some blocks that I want to layout individually on the page, however I also want them to update wh..."
				},
				{
					"id": 5,
					"thumbnail" : "https://cerledesnageursavranches.fr/files/club-190503090/actualites/actualite_30604.jpeg",
					"description" : "I have some blocks that I want to layout individually on the page, however I also want them to update wh..."
				},
				{
					"id": 6,
					"thumbnail" : "https://cerledesnageursavranches.fr/files/club-190503090/actualites/actualite_30604.jpeg",
					"description" : "I have some blocks that I want to layout individually on the page, however I also want them to update wh..."
				},
			]
		}
	}

	updateItems() {
		let tempState = this.state.articles;
		let data = this.loadData();

		data["articles"].forEach(article => {
			tempState.push(
				<FeaturedArticle path={article.thumbnail} key={article.id}>
					{article.description}
				</FeaturedArticle>
			)
		});

		this.setState({
			articles: tempState
		})
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

	componentDidMount() {
		this.updateItems();

		window.addEventListener('scroll', this.scrolled);
	}

    render() {
        return (
            <div className="stray grey">
                <div className="container">
					<h1 className="centered"> Nos articles </h1>

                    <section id="featured-articles">
                        {this.state.articles}
                    </section>
                </div>
            </div>
        )
    }
}

export default Articles;