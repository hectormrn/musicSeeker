import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/home';
import NotFound from '../pages/components/not-found';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../shared/components/header";
import menu from "../menu.json";
import ApiClient from '../http/apiClient';
import Login from '../pages/components/login';
import Footer from '../shared/components/footer';
import MediaGrid from '../pages/components/media-grid';
import Album from '../pages/containers/album';
import Artist from '../pages/containers/artist';
import Profile from '../pages/containers/profile';
import NowPlaying from '../pages/containers/now-playing';
import PlayList from '../pages/containers/playlist';

const homeContainer = document.getElementById('home-container')
const api = new ApiClient();
let settings = api.getSPToken();

ReactDOM.render( 
    <BrowserRouter>
    {
        settings ?
        <Fragment>
            <Header data={menu}/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/album/:idalbum" component={Album} />
                <Route exact path="/artist/:idartist" component={Artist} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/profile/:idprofile" component={Profile} />
                <Route exact path="/player" component={NowPlaying} />
                <Route exact path="/playlist/:idplaylist" component={PlayList} />
                <Route path="/results/:type/:keyword" component={MediaGrid} />
                <Route component={NotFound}/>
            </Switch>
            <Footer />
        </Fragment>
        :
        <Login />
    }
    </BrowserRouter>
, homeContainer);