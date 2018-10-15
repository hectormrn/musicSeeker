import React, { Fragment } from "react";
import Media from "../../shared/components/Media";
import './mix-preview.scss';

const MixPreview = props => (
    <div className="container Mix" >
        {
            props.data && props.data.length > 0 ?
            <Fragment>
                <div className="row border Mix-body" >
                    <div className="col-md-12">
                        <label>{props.title}</label>
                        <a href="#" className="Mix-body-link">Ver todos</a>
                    </div>
                {
                    props.data.map( item => {
                        return <Media data={item} key={item.id}/>    
                    })
                }
                </div>
            </Fragment>
            :
            <div style={{textAlign:"center"}}>Loading {props.title} 🧐...</div>    
        }
    </div>
)

export default MixPreview;