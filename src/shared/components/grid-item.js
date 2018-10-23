import React from "react";
import { getMediaThumbnail, getImgMediaClass, getMediaDescription } from '../../http/utilities';
import { Link } from "react-router-dom";
import './media-summary.scss';

const GridItem = props => (
    <div className="media col-sm-4 row" style={{marginBottom:'5px', textAlign: "center",margin: "10px 0px 10px 0px"}}>
        <div className="col-sm-12">{
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
        </div>
        <div className="col-sm-12 media-body" style={{paddingLeft:'5px', textAlign:"center"}}>
        <h6 className="mt-0 mb-1 font-weight-bold">{props.data.name}</h6>
            {
                props.data.type != "artist" &&
                <label>{getMediaDescription(props.data)}</label>
            }
        </div>
    </div>
)

export default GridItem;