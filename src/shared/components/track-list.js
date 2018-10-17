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
                props.tracks.length > 0 &&
                props.tracks.map( item => {
                    let { name, duration_ms, id} = props.type == 'playlist' ? item.track: item;
                    return <TrackItem name={name} duration={duration_ms} idx={i++} key={id}/>
                })
                }
                </tbody>
            </table>
        </div>
    )
}

export default TrackList;