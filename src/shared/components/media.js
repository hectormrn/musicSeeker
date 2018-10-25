import React, {Fragment} from "react";
import { getMediaThumbnail, getImgMediaClass, getMediaDescription } from '../../http/utilities';
import { Link } from "react-router-dom";

const classType = function (insideGrid) {
    return insideGrid ? "media col-6 col-sm-4 row": "media col-sm-6";
}

const getBodyStyle = (forGrid) => {
    let s = {paddingLeft: '5px' };
    return forGrid ? Object.assign({}, s, {textAlign: 'center'}) : s;
}

const renderThumbnailMedia = (props) => {
    let imgWrapper;
    return (type) => {
        imgWrapper = type == "track" ? 
            <img className={getImgMediaClass(props.data.type)} 
                width={80} height={80} src={getMediaThumbnail(props.data)}
            />
            : 
            <Link to={`/${props.data.type}/${props.data.id}`}>
                <img className={getImgMediaClass(props.data.type)} 
                    width={80} height={80} src={getMediaThumbnail(props.data)}
                />
            </Link>
        return (isGrid) => {
            return(
                isGrid ? 
                <div className="col-sm-12" style={{textAlign:'center'}}>{imgWrapper}</div>                        
                : 
                <Fragment>{imgWrapper}</Fragment>
            )
        }
    }
}

const Media = props => (
    <div className={classType(props.insideGrid)} style={{marginBottom:'5px'}}>
        { renderThumbnailMedia(props)(props.data.type)(props.insideGrid) }
        <div className="media-body" style={getBodyStyle(props.insideGrid)}>
        <h6 className="mt-0 mb-1 font-weight-bold">{props.data.name}</h6>
            {
                props.data.type != "artist" &&
                <label>{getMediaDescription(props.data)}</label>
            }
        </div>
    </div>
)

export default Media;