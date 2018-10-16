import React from "react";
import '../layouts.scss';

function AlbumLayout (props) {
    return (
        <section className="main">
            <div className="container">
                {props.children}
            </div>
        </section>
    )
}

export default AlbumLayout;