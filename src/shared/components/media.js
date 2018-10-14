import React from "react";
import { getMediaThumbnail, getImgMediaClass } from '../../http/utilities';

const Media = props => (
    <div className="media col-sm-6" style={{marginBottom:'5px'}}>
        <img 
            className={getImgMediaClass(props.data.type)} 
            width={80} height={80} 
            src={getMediaThumbnail(props.data)}
        />
        <div className="media-body">
        <h6 className="mt-0 mb-1">{props.data.name}</h6>
            Description...
        </div>
    </div>
)

export default Media;