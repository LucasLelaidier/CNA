import React from 'react'
import './featuredArticle.css'
import './featuredArticleMobile.css'

import PropTypes from 'prop-types';
import ReactResizeDetector from 'react-resize-detector';
import { Link } from "react-router-dom";

class FeaturedArticle extends React.Component {
    constructor(props) {
        super(props);

        this.footer = React.createRef();
        this.description = React.createRef();
    }

    shortenText(shortMessage) {
        if(this.footer.current) {
            this.description.current.innerHTML = this.props.children;
            while(this.footer.current.offsetHeight < this.footer.current.scrollHeight) {
                let paragraphText = this.description.current.innerHTML;
                paragraphText = paragraphText.substring(0, paragraphText.length - shortMessage.length)

                let lastIndex = paragraphText.lastIndexOf(" ");
                this.description.current.innerHTML = paragraphText.substring(0, lastIndex);

                this.description.current.innerHTML += shortMessage;
            }
        }
    }

    render () {
        return <Link to={`${this.props.edit ? '/admin' : ''}/article/${this.props.id}`} className="article">
            <div className="article-head" style={this.props.color ? {backgroundColor: this.props.color} : {backgroundImage: `url(${this.props.preview ? this.props.path : `http://localhost:7958${this.props.path}`})`}}>
                <span className="article-date"> {this.props.date} </span>
            </div>
            <div ref={this.footer} className="article-foot">
                <h2 className="title"> {this.props.title} </h2>
                <p ref={this.description}>
                    {this.props.children}
                </p>
                <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} />
            </div>
        </Link>
    }
}

FeaturedArticle.propTypes = {
    id: PropTypes.number.isRequired,
}

export default FeaturedArticle;
