import React from "react";
import './media-summary.scss';
import { getMediaThumbnail } from "../../http/utilities";

const MediaSummary = props => (
    <div className="row MediaSummary">
        <div className="col-lg-3 col-md-4 col-sm-6">
        <img src={getMediaThumbnail(props.data)} 
            className="rounded float-left"
            width={200} height={200}
        />
        </div>
        <div className="col-lg-9 col-md-8 col-sm-6">
            <label>{props.data.album_type}</label>
            <h5>{props.data.name}</h5>
            <p>De <b>{props.data.artists[0].name}</b></p>
            <p>{props.data.release_date} | {props.data.total_tracks} canciones</p>
        </div>
    </div>
)

export default MediaSummary;