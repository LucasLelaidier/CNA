import React from 'react'
import './adminSkeleton.css'

import { Link } from "react-router-dom";

class AdminSkeleton extends React.Component {
    render() {
        return (
            <div id="admin-grid">
                <div className="left">
                    <img alt="logo du CNA" src="/cna_original.jpg"></img>

                    <div className="menu">
                        <Link to="/admin/articles" className={`link ${this.props.page === "1" ? "selected" : ""}`}>
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="#E56B6F" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>

                            <span> Articles </span>
                        </Link>

                        <Link to="/admin/evenements" className={`link ${this.props.page === "2" ? "selected" : ""}`}>
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="#AFA8A9" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>

                            <span> Evènements </span>
                        </Link>

                        <Link to="/admin/galeries" className={`link ${this.props.page === "3" ? "selected" : ""}`}>
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="#AFA8A9" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>

                            <span> Galerie </span>
                        </Link>
                    </div>

                    <Link to="/" className="light-button"> Retourner au site </Link>
                </div>

                <div className="center">
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>

                <div className="right">
                    <h1> Ajouts récents </h1>

                    <div className="separator">
                        <span> 01/02/2020 </span>
                        <hr/>
                    </div>

                    <div className="operation">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="#E56B6F" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>

                        <div className="content">
                            <h3> Article </h3>
                            <span> Finale du Nat Avenirs Eté </span>
                        </div>

                        <div className="edit">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                        </div>
                    </div>

                    <div className="operation">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="#E56B6F" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>

                        <div className="content">
                            <h3> Evenement </h3>
                            <span> 1er District, Compétition... </span>
                        </div>

                        <div className="edit">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminSkeleton;