import React, { Component } from 'react'
import feather from 'feather-icons'

import './global.css'

import MainRouter from './routes'

class App extends Component {
	componentDidMount() {
        feather.replace();
    }
	
	render() {
		return (<div>
				<MainRouter />
			</div>
		)
	}
}

export default App
