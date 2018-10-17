import React from "react";
import './media-summary.scss';
import { getMediaThumbnail } from "../../http/utilities";

const RenderSummary = props => {
    switch (props.data.type) {
        case 'artist':
            return(<div>
                    <label>Artista</label>
                    <h3>{props.data.name}</h3>
                    <p>Seguidores {props.data.followers.total}</p>
                    </div>)
        case 'playlist':
            return(<div>
                    <label>Playlist</label>
                    <h3>{props.data.name}</h3>
                    <p>Created by {props.data.owner.display_name} - {props.data.tracks.total} songs</p>
                    <p>Seguidores {props.data.followers.total}</p>
                </div>)
        default:
            return(<div>
                    <label>Album</label>
                    <h3>{props.data.name}</h3>
                    <p>By {props.data.artists[0].name}</p>
                    <p>{props.data.release_date}</p>
                </div>)

    }
}

const MediaSummary = props => (
    <div className="row MediaSummary">
        <div className="col-lg-3 col-md-4 col-sm-6">
        <img src={getMediaThumbnail(props.data)} 
            className="rounded float-left"
            width={200} height={200}
        />
        </div>
        <div className="col-lg-9 col-md-8 col-sm-6">
            {RenderSummary(props)}
        </div>
    </div>
)

export default MediaSummary;