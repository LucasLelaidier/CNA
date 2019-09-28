import React, { Component } from 'react'
import feather from 'feather-icons'
import MainRouter from './routes'
import './global.css'

class App extends Component {
	componentDidMount() {
        feather.replace();
    }
	
	render() {
		return (
			<MainRouter />
		)
	}
}

export default App
