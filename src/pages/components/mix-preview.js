import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import Media from "../../shared/components/media";
import './mix-preview.scss';

const MixPreview = props => (
    <div className="container Mix" >
        {
            props.data && props.data.length > 0 &&
            <Fragment>
                <div className="row border Mix-body" >
                    <div className="col-md-12">
                        <label className="font-weight-bold">{props.title}</label>
                        <Link to={`/results/${props.title.toLowerCase()}/${props.qry}`} className="Mix-body-link">Ver todos</Link>
                    </div>
                {
                    props.data.map( item => {
                        return <Media data={item} key={item.id} insideGrid={false}/>    
                    })
                }
                </div>
            </Fragment>    
        }
    </div>
)

export default MixPreview;