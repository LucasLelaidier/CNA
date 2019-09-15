import React, { Component } from 'react'
import './App.css'

import Header from './header/Header'
import FeaturedArticle from './article/FeaturedArticle'
import Event from './event/Event'
import PresentationCard from './presentationCard/PresentationCard'
import Footer from './footer/Footer'

class App extends Component {
	render() {
		return (
			<body>
				<Header logoPath="public\email.svg" />
				<div className="container grey">
					<div id="events">
						<Event/>
						<Event/>
					</div>

					<hr/>

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

				<div className="container grey">
					<section id="cards">
						<PresentationCard path="https://abcnatation.fr/files/club-190503090/actualites/actualite_24016.jpeg" title="Nous joindre">
							Retrouvez toutes les informations utiles pour nous contacter !
						</PresentationCard>

						<PresentationCard path="https://abcnatation.fr/files/club-190503090/actualites/actualite_24016.jpeg" title="Nous joindre">
							Retrouvez toutes les informations utiles pour nous contacter !
						</PresentationCard>

						<PresentationCard path="https://abcnatation.fr/files/club-190503090/actualites/actualite_24016.jpeg" title="Nous joindre">
							Retrouvez toutes les informations utiles pour nous contacter !
						</PresentationCard>
					</section>
				</div>

				<Footer />
			</body>
		)
	}
}

export default App
