import React, { Component } from 'react'

import './homePage.css'
import './homePageMobile.css'

import FeaturedArticle from 'components/article/FeaturedArticle'
import Event from 'components/event/Event'
import PresentationCard from 'components/presentationCard/PresentationCard'

class HomePage extends Component {
	render() {
		return (
			<div>
				<div className="stray grey">
					<div className="container">
						<Event/>

						<section id="featured-articles">
							<FeaturedArticle path="https://cerledesnageursavranches.fr/files/club-190503090/actualites/actualite_31708.jpg">
								I have some blocks that I want to layout individually on the page, however I also want them to update wh...
							</FeaturedArticle>

							<FeaturedArticle path="https://cerledesnageursavranches.fr/files/club-190503090/actualites/actualite_31708.jpg">
								I have some blocks that I want to layout individually on the page, however I also want them to update wh...
							</FeaturedArticle>

							<FeaturedArticle path="https://cerledesnageursavranches.fr/files/club-190503090/actualites/actualite_31708.jpg">
								I have some blocks that I want to layout individually on the page, however I also want them to update wh...
							</FeaturedArticle>
						</section>
					</div>
				</div>

				<div className="stray white">
					<div className="container white">
						<div className="sponsor-section">
							<h1> Ils nous soutiennent : </h1>

							<section className="sponsors">
								<img alt="logo" src="/logos/13assiettes.png" />
								<img alt="logo" src="/logos/AM.png" />
								<img alt="logo" src="/logos/avranches.jpg" />
								<img alt="logo" src="/logos/avranches.png" />
								<img alt="logo" src="/logos/BuffaloGrill.png" />
								<img alt="logo" src="/logos/creditmutuel.jpg" />
								<img alt="logo" src="/logos/croixDor.png" />
								<img alt="logo" src="/logos/jouetclub.jpg" />
								<img alt="logo" src="/logos/manche.png" />
								<img alt="logo" src="/logos/mcdo.png" />
								<img alt="logo" src="/logos/merePoulard.jpg" />
								<img alt="logo" src="/logos/NDP.PNG" />
								<img alt="logo" src="/logos/norauto.PNG" />
								<img alt="logo" src="/logos/normandie.jpg" />
							</section>
						</div>
					</div>
				</div>
				
				<div className="stray grey">
					<div className="container grey">
						<section id="cards">
							<PresentationCard path="/illustrations/joindre.jpeg" title="Nous joindre">
								Retrouvez toutes les informations utiles pour nous contacter !
							</PresentationCard>

							<PresentationCard path="/illustrations/rejoindre.jpg" title="Rejoindre le club">
								Vous souhaitez rejoindre le club ? Retrouvez ici toutes les activités que nous proposons. 
							</PresentationCard>

							<PresentationCard path="/illustrations/resultats.jpg" title="Voir mes résultats">
								Vous avez participé à une compétition ? Retrouvez vos résultats ici.
							</PresentationCard>
						</section>
					</div>
				</div>
			</div>
		)
	}
}

export default HomePage
