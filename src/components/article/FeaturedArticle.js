import React from 'react'
import './featuredArticle.css'
import './featuredArticleMobile.css'
import ReactResizeDetector from 'react-resize-detector';

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
        return <article className="article">
            <div className="article-head" style={{backgroundImage: `url(${this.props.path})`}}>
                
            </div>
            <div ref={this.footer} className="article-foot">
                <h2 className="title"> {this.props.title} </h2>
                <p ref={this.description}>
                    {this.props.children}
                </p>
                <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} />
            </div>
        </article>
    }
}

FeaturedArticle.defaultProps = {
    path: '/logoCNA_full.svg'
}

export default FeaturedArticle;
