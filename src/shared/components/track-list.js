import React from "react";
import TrackItem from "../../shared/components/track-item";

const TrackList = props => {
    let i = 1
    return(
        <div className="row" style={{marginTop:'15px'}}>
            <table className="table table-hover">
                <thead><tr><th>#</th><th>Title</th><th>🕒</th></tr></thead>
                <tbody>
                {
                props.tracks.items.map( track => {
                    let { name, duration_ms} = track;
                    return <TrackItem name={name} duration={duration_ms} idx={i++} key={track.id}/>
                })
                }
                </tbody>
            </table>
        </div>
    )
}

export default TrackList;