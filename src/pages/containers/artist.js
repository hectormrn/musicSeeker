import React, { Component, Fragment } from "react";
import ApiClient from "../../http/apiClient";
import ArtistLayout from "../../pages/components/artist/artist-layout";
import MediaSummary from "../../shared/components/media-summary";
import TrakcList from "../../shared/components/track-list";
import Loading from '../../shared/container/loading';
import LoadingIcon from '../../shared/components/loading-icon';
import HandleError from "../../error/containers/handle-error";
import BackButton from "../../shared/components/back-button";

class Artist extends Component {
    constructor(){
        super();
        this.api = new ApiClient();
        this.state = {
            artist: {},
            topTracks: []
        }
    }

    componentDidMount () {
        const { idartist } = this.props.match.params
        idartist && this.getArtistData(idartist)
    }

    getArtistData (id) {
        this.api.getArtistById(id).then( resp => {
            this.setState({artist: resp});
        })
        this.api.getArtistTopTracks(id).then(resp => {
            this.setState({topTracks: resp})
        })
    }

    render() {
        return(
            <HandleError>
                <ArtistLayout>
                {
                    Object.keys(this.state.artist).length > 0 ?
                    <Fragment>
                        <BackButton />
                        <MediaSummary data={this.state.artist} />
                        <TrakcList tracks={this.state.topTracks} type={this.state.artist.type}/>   
                    </Fragment>
                    :
                    <Loading><LoadingIcon /></Loading>
                }
                </ArtistLayout>
            </HandleError>
        )
    }

}

export default Artist;