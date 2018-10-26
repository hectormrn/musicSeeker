import React, { Component, Fragment } from "react";
import ApiClient from '../../http/apiClient'
import HandleError from "../../error/containers/handle-error";
import PlaylistLayout from "../../pages/components/playlist/playlist-layout";
import Loading from "../../shared/container/loading";
import LoadingIcon from "../../shared/components/loading-icon";
import MediaSummary from '../../shared/components/media-summary';
import TrakcList from "../../shared/components/track-list";
import BackButton from "../../shared/components/back-button";

class PlayList extends Component {
    constructor() {
        super()
        this.api = new ApiClient()
        this.state = {
            playlist: {},
            tracks: []
        }
    }

    componentDidMount () {
        const { idplaylist } = this.props.match.params
        idplaylist && this.getPlaylistData(idplaylist)
    }

    getPlaylistData (id) {
        this.api.getPlaylist(id).then(resp => {
            this.setState({playlist: resp})
        })
    }

    render() {
        return(
            <HandleError>
                <PlaylistLayout>
                {
                    Object.keys(this.state.playlist).length ?
                    <Fragment>
                        <BackButton />
                        <MediaSummary data={this.state.playlist} />
                        <TrakcList tracks={this.state.playlist.tracks.items} type={this.state.playlist.type}/>
                    </Fragment>
                    :
                    <Loading><LoadingIcon /></Loading>
                }
                </PlaylistLayout>
            </HandleError>
        )
    }
}

export default PlayList;