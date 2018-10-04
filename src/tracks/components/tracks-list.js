import React from "react";
import Track from "./track.js";

const TrackList = (props) => {
    return (
        <ul>
        {
            props.tracks.map((item)=>{
                return <Track {...item} key={item.id} />
            })
        }
        </ul>
    )
}

export default TrackList;