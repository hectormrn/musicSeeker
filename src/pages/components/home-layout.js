
import React from "react";
import './HomeLayout.scss';

function HomeLayout (props) {

    return (
        <section className="main">
            {props.children}
        </section>
    )
}

export default HomeLayout;