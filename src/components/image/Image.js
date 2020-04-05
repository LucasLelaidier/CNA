import React from 'react'
import './image.css'

class Image extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: "loading", // error ou loaded
            image: null,
		};
    }

    componentDidMount() {
        fetch(`http://localhost:7958${this.props.name}`)
			.then((res) => {
                if (res.status !== 200) {
                    this.setState({ status: "error" });
                } else {
                    res.blob().then((blob) => {
                        this.setState({ status: "loaded", image: URL.createObjectURL(blob) });
                    });
                }
			}).catch((err) => {
                console.log(err);
                this.setState({ status: "error" });
			});
    }

    render() {
        return (
            <React.Fragment>
                {this.state.status === "loaded" ? <div className="image" style={{backgroundImage: `url(${this.state.image})`}}></div> : "" }
                {this.state.status === "loading" ? <div className="lds-ring image"><div></div><div></div><div></div><div></div></div>  : "" }
                {this.state.status === "error" ? <div className="image" style={{backgroundImage: "url(/illustrations/image-not-found.png)"}}></div> : "" }
            </React.Fragment>
        );
    }
}

export default Image;
