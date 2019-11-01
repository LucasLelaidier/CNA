import React, { Component } from 'react'

import './homePage.css'
import './homePageMobile.css'

import FeaturedArticle from 'components/article/FeaturedArticle'
import Event from 'components/event/Event'
import PresentationCard from 'components/presentationCard/PresentationCard'

class HomePage extends Component {
	
	loadData() {
		return {
			"articles" : [
				{
					"id": 1,
					"thumbnail" : "https://cerledesnageursavranches.fr/files/club-190503090/actualites/actualite_31708.jpg",
					"title": "Finale du Nat Avenirs Eté",
					"description" : "Dimanche 16 Juin s’est déroulée la finale régionale du Nat Avenirs à saint Lo. A l’issue des deux journées départementales..."
				},
				{
					"id": 2,
					"thumbnail" : "https://cerledesnageursavranches.fr/files/club-190503090/actualites/actualite_33130.jpg",
					"title": "1ère journée District à Granville",
					"description" : "Première compétition pour nos nageurs avranchinais ce week end lors de la 1ère journée district de rentrée !!!"
				},
				{
					"id": 3,
					"thumbnail" : "https://cerledesnageursavranches.fr/files/club-190503090/actualites/actualite_31226.jpg",
					"title": "Interclubs normandie jeunes",
					"description" : "🏆🏆🏆🏆Championnes de Normandie pour l’equipe 1, composée de Rose HENNEQUIN, Inès BATTAIS, Berenice DATIN et Louisa LANDEMAINE 🏆🏆🏆🏆"
				},
			],
			"logos" : [
				{
					"brand" : "13 assiettes",
					"logo" : "/logos/13assiettes.png"
				},
				{
					"brand" : "AmM",
					"logo" : "/logos/AM.png"
				},
				{
					"brand" : "avranches",
					"logo" : "/logos/avranches.jpg	"
				},
				{
					"brand" : "avranches",
					"logo" : "/logos/avranches.png"
				},
				{
					"brand" : "buffalo grill",
					"logo" : "/logos/BuffaloGrill.png"
				},
				{
					"brand" : "credit mutuel",
					"logo" : "/logos/creditmutuel.jpg"
				},
				{
					"brand" : "croix d'or",
					"logo" : "/logos/croixDor.png"
				},
				{
					"brand" : "jouet club",
					"logo" : "/logos/jouetclub.jpg"
				},
				{
					"brand" : "manche",
					"logo" : "/logos/manche.png"
				},
				{
					"brand" : "macdonald",
					"logo" : "/logos/mcdo.png"
				},
				{
					"brand" : "mère poulard",
					"logo" : "/logos/merePoulard.jpg"
				},
				{
					"brand" : "NDP",
					"logo" : "/logos/NDP.PNG"
				},
				{
					"brand" : "norauto",
					"logo" : "/logos/norauto.PNG"
				},
				{
					"brand" : "normandie",
					"logo" : "/logos/normandie.jpg"
				},
				{
					"brand" : "optique mazier",
					"logo" : "/logos/optiqueMazier.PNG"
				},
				{
					"brand" : "petit bateau",
					"logo" : "/logos/petitBateau.jpg"
				},
				{
					"brand" : "optique plantade",
					"logo" : "/logos/plantade.PNG"
				},
				{
					"brand" : "les petits poulbots",
					"logo" : "/logos/ptitPoulbots.png"
				},
				{
					"brand" : "pulsat",
					"logo" : "/logos/pulsat.png"
				},
				{
					"brand" : "décathlon",
					"logo" : "/logos/decathlon.png"
				},
				{
					"brand" : "solabaie",
					"logo" : "/logos/solabaie.jpg"
				},
			]
		}
	}

	render() {
		let articles = [];
		let logos = [];
		let data = this.loadData();

		data['articles'].forEach(article => {
			articles.push(
				<FeaturedArticle path={article.thumbnail} title={article.title} key={article.id}>
					{article.description}
				</FeaturedArticle>
			)
		});

		let id = 0;
		data['logos'].forEach(logo => {
			logos.push(
				<img alt={logo.brand} src={logo.logo} key={id} />
			)
			id++;
		});

		return (
			<div>
				<div className="stray grey">
					<div className="container">
						<Event/>

						<section id="featured-articles">
							{articles}
						</section>
					</div>
				</div>

				<div className="stray white">
					<div className="container white">
						<div className="sponsor-section">
							<h1> Ils nous soutiennent : </h1>

							<section className="sponsors">
								{logos}
							</section>
						</div>
					</div>
				</div>
				
				<div className="stray grey">
					<div className="container grey">
						<section id="cards">
							<PresentationCard path="/illustrations/joindre.jpeg" title="Nous joindre" callToAction="Nous contacter">
								Retrouvez toutes les informations utiles pour nous contacter !
							</PresentationCard>

							<PresentationCard path="/illustrations/rejoindre.jpg" title="Rejoindre le club" callToAction="Voir les activités">
								Vous souhaitez rejoindre le club ? Retrouvez ici toutes les activités que nous proposons. 
							</PresentationCard>

							<PresentationCard path="/illustrations/resultats.jpg" title="Voir mes résultats" callToAction="Voir mes résultats">
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
