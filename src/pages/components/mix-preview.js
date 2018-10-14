import React from "react";
import Media from "../../shared/components/Media";

const MixPreview = props => (
    <div className="container">
        <div className="">
            <label>{props.title}</label>
            <a href="" style={{float:'right'}}>Ver todos</a>
        </div>
        <div className="row border" style={{padding:'5px 0'}} >
        {
            props.data && 
            props.data.map( item => {
                return <Media data={item} key={item.id}/>    
            })
        }
        </div>
    </div>
)

export default MixPreview;