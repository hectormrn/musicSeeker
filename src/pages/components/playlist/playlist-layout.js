import React from "react";
import "../layouts.scss";

const PlaylistLayout = props => (
    <section className="main">
        <div className="container">
            {props.children}
        </div>
    </section>
)

export default PlaylistLayout;