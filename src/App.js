import React, { Component } from 'react'
import './App.css'

import Header from './Header'
import FeaturedArticle from './FeaturedArticle'

class App extends Component {
	render() {
		return (
			<body>
				<Header logoPath="public\email.svg" />
				<div className="container grey">
					<section id="featured-articles">
						<FeaturedArticle path="https://cerledesnageursavranches.fr/files/club-190503090/actualites/actualite_31708.jpg" type="big">
							I have some blocks that I want to layout individually on the page, however I also want them to update when the browser window changes. The very end result will be something like Ben Holland's Pinterest layout, but written using React not just jQuery. I’m still a way off.
              			</FeaturedArticle>
						<div>
							<FeaturedArticle path="https://cerledesnageursavranches.fr/files/club-190503090/actualites/actualite_30607.jpg" type="small" />
							<FeaturedArticle path="https://cerledesnageursavranches.fr/files/club-190503090/actualites/actualite_30607.jpg" type="small" />
						</div>
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

				<div className="container grey fill">
					<div id="fill">

					</div>
				</div>
			</body>
		)
	}
}

export default App
