import React, { Component } from 'react';
import SpotifyWebApi from "spotify-web-api-js";
import HomeLayout from '../components/home-layout';
import { getHashParams } from '../../utils/utilities';

const spotifyApi = new SpotifyWebApi();

class Home extends Component {
  constructor(){
    super();
    const params = getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: '' }
    }
  }

  simpleSearch(){
    spotifyApi.searchTracks('Lullaby')
    .then(function(data) {
      console.log('Search by "Lullaby"', data);
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