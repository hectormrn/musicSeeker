import React, { Component } from 'react';
import SpotifyWebApi from "spotify-web-api-js";
import HomeLayout from '../components/home-layout';

const spotifyApi = new SpotifyWebApi();

class Home extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: '' }
    }
    console.log(params);
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  simpleSearch(){
    spotifyApi.searchTracks('Love')
    .then(function(data) {
      console.log('Search by "Love"', data);
    }, function(err) {
      console.error(err);
    });
  }

  render() {
    return (
      <HomeLayout >
        {
          !this.state.loggedIn && 
            <a href='http://localhost:8888' > Login to Spotify </a>
        }
        <div>
          Now Playing: { this.state.nowPlaying.name }
        </div>
        <div>
          <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }}/>
        </div>
        { this.state.loggedIn &&
          <button onClick={() => this.simpleSearch()}>
            search song
          </button>
        }
      </HomeLayout>
    )
  }
}

export default Home