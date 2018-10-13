import React from "react";
//import Media from "../../shared/components/Media";

const MixPreview = props => (
    <div className="row">
        <h3>{props.title}</h3>
        <ul>
        {
            props.data && 
            props.data.map( item => {
                return <li key={item.id} >{item.name}</li>
            })
        }
        </ul>
    </div>
)

export default MixPreview;