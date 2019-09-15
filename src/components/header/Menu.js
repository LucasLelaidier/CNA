import React from 'react'
import './header.css'

class Menu extends React.Component {
    render () {
        if(this.props.size === 3) {
            return <span> {this.props.text} </span>;
        }
        if(this.props.size === 2) {
            return <img className="menu-image" alt="menu" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" /> ;
        }
        if(this.props.size === 1) {
            return 1;
        }
        return "error";
    }
}

export default Menu