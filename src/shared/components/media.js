import React from "react";
import { getMediaThumbnail, getImgMediaClass, getMediaDescription } from '../../http/utilities';
import { Link } from "react-router-dom";

const Media = props => (
    <div className="media col-sm-6" style={{marginBottom:'5px'}}>
        {
            props.data.type == "track" ?
            <img 
                className={getImgMediaClass(props.data.type)} 
                width={80} height={80} 
                src={getMediaThumbnail(props.data)}
            />
            :
            <Link to={`/${props.data.type}/${props.data.id}`}>
            <img 
                className={getImgMediaClass(props.data.type)} 
                width={80} height={80} 
                src={getMediaThumbnail(props.data)}
            />
            </Link>
        }
        <div className="media-body" style={{paddingLeft:'5px'}}>
        <h6 className="mt-0 mb-1 font-weight-bold">{props.data.name}</h6>
            {
                props.data.type != "artist" &&
                <label>{getMediaDescription(props.data)}</label>
            }
        </div>
    </div>
)

export default Media;