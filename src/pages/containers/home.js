import React, { Component } from 'react';
import SpotifyWebApi from "spotify-web-api-js";
import HomeLayout from '../components/home-layout';
import { getToken } from '../../utils/utilities';
import Search from '../../shared/components/search';
import TrackList from '../../tracks/components/tracks-list';
import HandleError from "../../error/containers/handle-error";
import Nav from "../../shared/components/nav";
import ModalContainer from "../../shared/container/modal";
import './App.scss';
import Modal from '../../shared/components/modal';

const spotifyApi = new SpotifyWebApi();

class Home extends Component {
  constructor(){
    super();
    //TODO refactor this
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

  //TODO refactor this...
  simpleSearch(e){
    e.preventDefault();
    if (this.state.keyword.trim() === "") {
      this.setState({tracks: []});
      return;
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

  render() {
    return (
      <HandleError>
        <HomeLayout>
          <Nav loggedIn={this.state.loggedIn}/>
          <Search 
            onType={(str) => this.setState({keyword: str})}
            onSearch={(e) => this.simpleSearch(e)} 
          />
          <TrackList tracks={this.state.tracks} />
          {
            !this.state.loggedIn &&
            <ModalContainer>
              <Modal handleClick={()=>{console.log("handle this")}} btnActive={false}>
                <a href="http://localhost:8888/login"><button className="button-login">Start app</button></a>
              </Modal>
            </ModalContainer>
          }  
        </HomeLayout>
      </HandleError>
    )
  }
}

export default Home