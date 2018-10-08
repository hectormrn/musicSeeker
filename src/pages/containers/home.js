import React, { Component } from 'react';
import ApiClient from "../../http/apiClient";
import HomeLayout from '../components/home-layout';
import Search from '../../shared/components/search';
import TrackList from '../../tracks/components/tracks-list';
import HandleError from "../../error/containers/handle-error";
import Nav from "../../shared/components/nav";
import ModalContainer from "../../shared/container/modal";
import './App.scss';
import Modal from '../../shared/components/modal';

class Home extends Component {
  constructor(){
    super();
    this.api = new ApiClient();
    const token = this.api.getSPToken();
    this.state = {
      loggedIn: token ? true : false,
      tracks: [],
      keyword: ""
    }
  }

  simpleSearch(e){
    e.preventDefault();
    if (this.state.keyword.trim() === "") {
      this.setState({ tracks: [] });
      return;
    }
    this.api.searchTracks(this.state.keyword, 10)
    .then( (arrTracks) => {
      this.setState({tracks: arrTracks})
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