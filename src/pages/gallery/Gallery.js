import React, { Component } from 'react'
import './gallery.css'

import Header from 'components/header/Header'
import Footer from 'components/footer/Footer'

class GroupeAvenir extends Component {
	render() {
		return (
            <body>
                <Header logoPath="public\email.svg" />

                <Footer />

            </body>
        )
    }
}

export default GroupeAvenir;