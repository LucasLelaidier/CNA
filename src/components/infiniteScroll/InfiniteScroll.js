import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './infiniteScroll.css'

import { isEmpty } from 'utility.js';

class InfiniteScroll extends Component {
    constructor(props) {
		super(props);

        this.state = {
			objects: [],
            page: 0,
            missing: 0,
            inCooldown: false,
            loading: false,
            error: false,
		};

		this.scrolled = this.scrolled.bind(this);
    }

    setLoading = (state) => {
        this.setState({ loading: state, error: false });
    }

    setError = () => {
        this.setState({ loading: false, error: true });
    }

    clear = () => {
        this.setState({
			objects: [],
            page: 0,
            missing: 0,
            inCooldown: false,
            loading: false,
            error: false,
        }, (() => {
            this.props.loadMore(this.props.objectsPerPage, this.state.page, this.state.missing, this.updateState, this.setLoading, this.setError);
        }));
    }

    updateState = (loaded) => {
        if(this.state.missing === this.props.objectsPerPage) {
            this.setState({ missing: 0 });
        }
        if(!isEmpty(loaded)) {
            let tempState = this.state.objects;
            tempState.push(loaded);
            this.setState({objects: tempState});

            if(loaded.length < this.props.objectsPerPage) {
                if(this.state.missing === 0) {
                    this.setState({ missing: this.props.objectsPerPage - loaded.length })
                } else {
                    this.setState({ missing: this.state.missing - loaded.length })
                }
            } else {
                this.setState({ page: this.state.page + 1})
            }
        }
        this.setState({ inCooldown: false });
    }
    
    componentDidMount() {
        this.props.loadMore(this.props.objectsPerPage, this.state.page, this.state.missing, this.updateState, this.setLoading, this.setError);
        window.addEventListener('scroll', this.scrolled);
    }

    scrolled(e) {
        if(!this.state.inCooldown) {
            var scrollHeight, totalHeight;
            scrollHeight = document.body.scrollHeight;
            totalHeight = window.scrollY + window.innerHeight;
    
            if(totalHeight + 50 >= scrollHeight)
            {
                this.setState({ inCooldown: true });
                setTimeout(() => {
                    this.setState({ inCooldown: false });
                }, 500);
                this.props.loadMore(this.props.objectsPerPage, this.state.page, this.state.missing, this.updateState, this.setLoading, this.setError);
            }
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <div>
                    { this.state.objects }
                </div>
                { this.state.loading ? <div className='lds-ring'><div></div><div></div><div></div><div></div></div> : "" }
                { this.state.error ? "Une erreur est survenue" : "" }   
            </React.Fragment>
        );
    }
};

InfiniteScroll.propTypes = {
	loadMore: PropTypes.func.isRequired,
};

InfiniteScroll.defaultProps = {
	objectsPerPage: 6,
}

export default InfiniteScroll;