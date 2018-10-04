import React from 'react';

//TODO refactor this...
function Track (props) {
    return(
        <li className="media my-4 border" >
            <img className="mr-3" src={props.album.images[2].url} alt="" />
            <div className="media-body">
                <h5 className="mt-0 mb-1">{props.artists[0].name}</h5>
                <h5 className="mt-0 mb-1">{props.name}</h5>
            </div>
        </li>
    )
}

export default Track;