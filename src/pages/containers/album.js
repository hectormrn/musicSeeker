import React, { Component, Fragment } from "react";
import ApiClient from "../../http/apiClient";
import { getMediaThumbnail } from '../../http/utilities';

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
        idalbum ? this.getAlbumByIdParams(idalbum): this.getAlbumDefault();
    }

    getAlbumByIdParams(id) {
        this.api.getAlbumById(id).then( resp => {
            this.setState({album: resp});
        })
    }

    getAlbumDefault() {
        console.log("TODO something...")
    }

    render() {
        return(
            <div className="container">
                {
                    Object.keys(this.state.album).length > 0 ?
                    <Fragment>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                        <img src={getMediaThumbnail(this.state.album)} 
                            className="rounded float-left"
                            width={200} height={200}
                        />
                        </div>
                        <div className="col-lg-9 col-md-8 col-sm-6">
                            <label>ÁLBUM</label>
                            <h3>{this.state.album.name}</h3>
                            <p>De <b>{this.state.album.artists[0].name}</b></p>
                            <p>{this.state.album.release_date} | {this.state.album.total_tracks} canciones</p>
                        </div>
                    </div>
                    <div className="row">
                        <ul>
                        {
                            this.state.album.tracks.items.map( item => {
                                return <li key={item.id}>{item.name}</li>
                            })
                        }
                        </ul>
                    </div>
                    </Fragment>   
                    :
                    <div><h1>Album View:</h1> {JSON.stringify(this.props)}</div>
                }
            </div>
        )
    }

}

export default Album;