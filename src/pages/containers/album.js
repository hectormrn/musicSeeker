import React, { Component, Fragment } from "react";
import AlbumLayout from "../../pages/components/album/album-layout";
import ApiClient from "../../http/apiClient";
import MediaSummary from "../../shared/components/media-summary";
import TrakcList from "../../shared/components/track-list";
import Loading from '../../shared/container/loading';
import LoadingIcon from '../../shared/components/loading-icon';
import HandleError from "../../error/containers/handle-error";
import BackButton from "../../shared/components/back-button";

class Album extends Component {
    constructor(){
        super();
        this.api = new ApiClient();
        this.state = {
            idAlbum: null,
            album: {}
        }
    }

    componentDidMount() {
        const { idalbum } = this.props.match.params
        idalbum && this.getAlbumByIdParams(idalbum)
    }

    getAlbumByIdParams(id) {
        this.api.getAlbumById(id).then( resp => {
            this.setState({album: resp});
        })
    }

    handleClick = (e) => this.props.history.goBack()

    render() {
        return(
            <HandleError>
                <AlbumLayout>
                {
                    Object.keys(this.state.album).length > 0 ?
                    <Fragment>
                        <BackButton />
                        <MediaSummary data={this.state.album} />
                        <TrakcList tracks={this.state.album.tracks.items} type={this.state.album.type}/>
                    </Fragment>   
                    :
                    <Loading><LoadingIcon /></Loading>
                }
                </AlbumLayout>
            </HandleError>
        )
    }

}

export default Album;