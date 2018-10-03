import React, { Component } from 'react';
import SpotifyWebApi from "spotify-web-api-js";
import HomeLayout from '../components/home-layout';
import { getToken } from '../../utils/utilities';
import './App.scss';

const spotifyApi = new SpotifyWebApi();

class Home extends Component {
  constructor(){
    super();
    const token = getToken();
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      tracks: [],
      keyword: ""
    }
  }

  simpleSearch(){
    if (this.state.keyword.trim() === "") {
      this.setState({tracks: []});
    }
    spotifyApi.searchTracks(this.state.keyword, {limit: 7})
    .then((data) => {
      console.log(`Result by ${this.state.keyword}`);
      console.log(data.tracks.items);
      this.setState({tracks: data.tracks.items})
    }).catch((err)=>{
      console.log("err: ", err)
    })
  }

  renderTracks() {
    //TODO refactor this...
    const listItems = this.state.tracks.map((track) => 
      <li className="media my-4" key={track.id}>
        <img className="mr-3" src={track.album.images[2].url} alt="" />
        <div className="media-body">
          <h5 className="mt-0 mb-1">{track.artists[0].name}</h5>
        </div>
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

  //TODO this code sucks! XD, writing compound components... 
  render() {
    return (
      <HomeLayout >
        { this.state.loggedIn ?
          <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <a className="navbar-brand" href="#">logo</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">AppName <span className="sr-only">(current)</span></a>
                  </li>
                </ul>
              </div>
            </nav>
            <div role="main" className="app-container container">
            <div className="jumbotron">
              <form>
                <div className="form-group">
                <input 
                  type="text" 
                  onChange={ (evt) => { this.setState({keyword: evt.target.value}) }}
                  className="form-control"
                />
                </div>
                <div className="form-group text-center">
                  <button type="button"
                    onClick={() => this.simpleSearch()}
                    className="btn btn-primary"  
                    >
                    Search song
                  </button>
                </div>
              </form>
              <div className="row result-area">
                  { this.state.tracks.length <= 0 ? 
                    "Searching..."
                    :
                    this.renderTracks()
                  } 
              </div>
            </div>              
            </div>
          </div>
          :
          <a href="http://localhost:8888/login">
            <button className="button-login"> Login to Spotify </button>
          </a>
        }
      </HomeLayout>
    )
  }
}

export default Home