import React, { Component, Fragment } from 'react';
import ApiClient from "../../http/apiClient";
import MainLayout from '../components/main-layout';
import Search from '../../shared/components/search';
import TrackList from '../../tracks/components/tracks-list';
import HandleError from "../../error/containers/handle-error";
import Login from '../components/login';
import './App.scss';
import Footer from "../../shared/components/footer";

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
        <MainLayout>
          {
          this.state.loggedIn ?
            <Fragment>
              <Search 
                onType={(str) => this.setState({keyword: str})}
                onSearch={(e) => this.simpleSearch(e)} 
              />
              <TrackList tracks={this.state.tracks} />
            </Fragment>
          :
           <Login />
          }  
        </MainLayout>
        <Footer />
      </HandleError>
    )
  }
}

export default Home