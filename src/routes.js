import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
 
import HomePage from 'pages/homePage/HomePage'
import GroupeAvenir from 'pages/groupeAvenir/GroupeAvenir'
import Gallery from 'pages/gallery/Gallery'
import Register from 'pages/register/Register'
import About from 'pages/about/About'
import Articles from 'pages/articles/Articles'
import Article from 'pages/article/Article'
import MyAccount from 'pages/myAccount/MyAccount'
import ArticleAdministration from 'pages/articleAdministration/ArticleAdministration'
import GalerieAdministration from 'pages/galerieAdministration/GalerieAdministration'
import ModifyArticle from 'pages/modifyArticle/ModifyArticle'

import ScrollToTop from 'components/scrollToTop/ScrollToTop';

export default function MainRouter () {
    return (
        <Router>
            <ScrollToTop>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/home" component={HomePage}/>
                <Route exact path="/groupe-avenir" component={GroupeAvenir}/>
                <Route exact path="/galerie" component={Gallery}/>
                <Route exact path="/inscription" component={Register}/>
                <Route exact path="/a-propos" component={About}/>
                <Route exact path="/articles" component={Articles}/>
                <Route exact path="/article/:id" component={Article}/>
                <Route exact path="/mon-compte" component={MyAccount}/>
                <Route exact path="/admin/articles" component={ArticleAdministration}/>
                <Route exact path="/admin/galeries" component={GalerieAdministration}/>
                <Route exact path="/admin/article/:id" component={ModifyArticle}/>
            </ScrollToTop>
        </Router>
    )
}
