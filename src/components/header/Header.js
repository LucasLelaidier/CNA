import React from 'react'
import ReactResizeDetector from 'react-resize-detector';
import feather from 'feather-icons'
import './header.css'

class Header extends React.Component {
    lastPadding = 0;

    constructor(props) {
        super(props);
        
        this.state = { size: 3 };
        this.logo = React.createRef();
        this.textNavbar = React.createRef();
        this.logoNavbar = React.createRef();
        this.headerDiv = React.createRef(); 
    }

    needResize = () => {
        let styles = window.getComputedStyle(this.headerDiv.current);
        let padding = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);

        let logoSize = this.logo.current.offsetWidth;
        let textNavbarSize = this.textNavbar.current.offsetWidth;
        let logoNavbarSize = this.logoNavbar.current.offsetWidth;

        if(logoSize + textNavbarSize < this.headerDiv.current.offsetWidth - padding - 60) {
            this.setState({
                size: 3
            });
        } else {
            if(logoSize + logoNavbarSize < this.headerDiv.current.offsetWidth - padding - 60) {
                this.setState({
                    size: 2
                });
            } else {
                this.setState({
                    size: 1
                });
            }
        }
    }

    componentDidMount() {
        feather.replace()
        this.needResize();
    }

    render () {
        return <header ref={this.headerDiv} className={`header ${this.state.size === 1 ? "mobileHeader" : ""}`}>
            <img alt="logo" ref={this.logo} id="logoHeader" src={process.env.PUBLIC_URL + '/logoCNA_full.svg'}/>

            <ul ref={this.textNavbar} className={`navbar ${this.state.size === 3 ? "" : " hide"}`}> 
                <li> <a href="e"> Acceuil </a> </li>      
                <li> 
                    <a href="e"> Le club </a>
                </li>
                <li>
                    Activités 
                    <ul className="dropdown">
                        <li> 
                            <a href="e"> Natation de course </a>
                            <i className="chevron" data-feather="chevron-right"></i>
                            <ul className="dropdown side">
                                <li> <a href="/groupe-avenir"> Avenir </a> </li>
                                <li> <a href="e"> Departement </a> </li>
                                <li> <a href="e"> District </a> </li>
                                <li> <a href="e"> Aquagym </a> </li>
                            </ul>
                        </li>
                        <li> <a href="e">Groupe maître</a> <i className="chevron" data-feather="chevron-right"></i></li>
                        <li> <a href="e">Groupe loisir</a> </li>
                        <li> <a href="e">Aquagym</a> </li>
                    </ul>
                </li>
                <li> <a href="e">articles </a> </li>
            </ul>

            <ul ref={this.logoNavbar} className={`navbar ${this.state.size === 2 ? "" : " hide"}`}> 
                <a href="a"><li> <i data-feather="home"></i> </li></a>
                <a href="a"><li> <i data-feather="shield"></i> </li></a>
                <a href="a"><li> <i data-feather="award"></i> </li></a>
                <a href="a"><li> <i data-feather="circle"></i> </li></a>
            </ul>
            
        </header>
    }
}

export default Header