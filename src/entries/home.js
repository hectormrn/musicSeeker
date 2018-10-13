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
                <Route exact path="/tracks" render={()=>(<div>Tracks...</div>)} />
                <Route exact path="/albums" render={()=>(<div>Albums...</div>)} />
                <Route exact path="/artist" render={()=>(<div>Artist...</div>)} />
                <Route exact path="/now-playing" render={()=>(<div>Now playing...</div>)} />
                <Route exact path="/profile" render={()=>(<div>Profile...</div>)} />
                <Route component={NotFound}/>
            </Switch>
            <Footer />
        </Fragment>
        :
        <Login />
    }
    </BrowserRouter>
, homeContainer);