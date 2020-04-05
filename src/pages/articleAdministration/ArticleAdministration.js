import React from 'react'
import './articleAdministration.css'

import InfiniteScroll from 'components/infiniteScroll/InfiniteScroll'
import { firstParagraph, isEmpty } from 'utility.js';
import { Link } from "react-router-dom";
import FeaturedArticle from 'components/article/FeaturedArticle'
import AdminSkeleton from 'components/adminSkeleton/AdminSkeleton'

class ArticleAdministration extends React.Component {
	loadData(articlesPerPage, page, missing, callback, setLoading, setError) {
		setLoading(true);
		fetch(`http://localhost:3001/article?order=art_date.desc&limit=${missing > 0 ? missing : articlesPerPage}&offset=${missing > 0 ? parseFloat(articlesPerPage*page)+parseFloat(articlesPerPage-missing) : articlesPerPage*page}`)
			.then(res => res.json())
			.then((articles) => {
				if(!isEmpty(articles)) {
					let html= [];
					Array.from(articles).forEach(article => {
						html.push(
							<FeaturedArticle edit="true" id={article.art_id} path={article.art_thumbnail} title={article.art_titre} date={article.art_date} key={article.art_id}>
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
            <div id="article-administration">
                <AdminSkeleton page="1">
					<div className="title-head">
						<h1> Gérer les articles </h1>
						<Link to="/admin/article/0"> Nouvel article </Link>
					</div>

                    <section id="featured-articles">
						<InfiniteScroll objectsPerPage="9" loadMore={this.loadData} />
                    </section>
                </AdminSkeleton>
            </div>
        )
    }
}

export default ArticleAdministration;