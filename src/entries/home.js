import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/home';
import NotFound from '../pages/components/not-found';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../shared/components/header";
import menu from "../menu.json";
import ApiClient from '../http/apiClient';
import Login from '../pages/components/login';
import Footer from '../shared/components/footer';
import MediaGrid from '../pages/containers/media-grid';
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
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/album/:idalbum" element={<Album />} />
                <Route exact path="/artist/:idartist" element={<Artist />} />
                <Route exact path="/profile" element={Profile} />
                <Route exact path="/profile/:idprofile" element={<Profile />} />
                <Route exact path="/player" element={<NowPlaying />} />
                <Route exact path="/playlist/:idplaylist" element={<PlayList />} />
                <Route path="/results/:type/:keyword" element={<MediaGrid />} />
                <Route element={<NotFound />}/>
            </Routes>
            <Footer />
        </Fragment>
        :
        <Login />
    }
    </BrowserRouter>
, homeContainer);