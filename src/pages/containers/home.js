import React, { Component, Fragment } from 'react';
import ApiClient from "../../http/apiClient";
import MainLayout from '../components/main-layout';
import Search from '../../shared/components/search';
import HandleError from "../../error/containers/handle-error";
import MixPreview from '../components/mix-preview';
import './App.scss';

class Home extends Component {
  constructor(props){
    super();
    this.api = new ApiClient();
    this.state = {
      keyword: "",
      mixed: []
    }
  }

  getMixData = e => {
    e.preventDefault();
    if (this.state.keyword.trim() === "") {
      this.setState({mixed: []});
      return;
    }
    this.api.searchMixed(this.state.keyword, 4)
    .then( (mixData) => {
      this.setState({mixed: mixData})
    });
  }

  handleKeyPress = e => {
    if (e.charCode == 13){
      e.preventDefault()
      this.getMixData(e);
    }
  }

  render() {
    return (
      <HandleError>
        <MainLayout>
            <Fragment>
              <Search 
                onTyping={ e => this.setState({keyword: e.target.value})}
                handlekp={this.handleKeyPress}
                onSearch={this.getMixData}
              />
                <MixPreview data={this.state.mixed[0]} title="Tracks" qry={this.state.keyword}/>
                <MixPreview data={this.state.mixed[1]} title="Artists" qry={this.state.keyword}/>
                <MixPreview data={this.state.mixed[2]} title="Albums" qry={this.state.keyword}/>
                <MixPreview data={this.state.mixed[3]} title="Playlists" qry={this.state.keyword}/>
            </Fragment>
        </MainLayout>
      </HandleError>
    )
  }
}

export default Home