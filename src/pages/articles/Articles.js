import React, { Component } from 'react'

import './articles.css'

import InfiniteScroll from 'components/infiniteScroll/InfiniteScroll'
import { firstParagraph, isEmpty } from 'utility.js';
import FeaturedArticle from 'components/article/FeaturedArticle'
import Header from 'components/header/Header'
import Footer from 'components/footer/Footer'

class Articles extends Component {
    loadData(articlesPerPage, page, missing, callback, setLoading, setError) {
		setLoading(true);
		fetch(`http://localhost:3001/article?order=art_date.desc&limit=${missing > 0 ? missing : articlesPerPage}&offset=${missing > 0 ? parseFloat(articlesPerPage*page)+parseFloat(articlesPerPage-missing) : articlesPerPage*page}`)
			.then(res => res.json())
			.then((articles) => {
				if(!isEmpty(articles)) {
					let html= [];
					Array.from(articles).forEach(article => {
						html.push(
							<FeaturedArticle id={article.art_id} path={article.art_thumbnail} title={article.art_titre} date={article.art_date} key={article.art_id}>
								{firstParagraph(JSON.parse(article.art_contenu))}
							</FeaturedArticle>
						)
					});
					callback(html);
				}
				setLoading(false);
			}).catch(() => {
				setError();
			});
	}

    render() {
        return (
			<div>
				<Header />
				<div className="stray grey">
					<div className="container">
						<h1 className="centered"> Nos articles </h1>

						<section id="featured-articles">
							<InfiniteScroll objectsPerPage="9" loadMore={this.loadData} />
						</section>
					</div>
				</div>
				<Footer />
			</div>
        )
    }
}

Articles.defaultProps = {
	articlesPerPage: 6,
}

export default Articles;