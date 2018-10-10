import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/home';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from "../shared/components/header";

const homeContainer = document.getElementById('home-container')

ReactDOM.render( 
    <BrowserRouter>
        <Fragment>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/tracks" render={()=>(<div>Tracks...</div>)} />
            <Route exact path="/albums" render={()=>(<div>Albums...</div>)} />
            <Route exact path="/artist" render={()=>(<div>Artist...</div>)} />
            <Route exact path="/now-playing" render={()=>(<div>Now playing...</div>)} />
            <Route exact path="/profile" render={()=>(<div>Profile...</div>)} />
        </Fragment>
    </BrowserRouter>
, homeContainer);