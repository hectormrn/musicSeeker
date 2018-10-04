import React from "react";
import './HomeLayout.scss';

function HomeLayout (props) {
    return (
        <section className="main">
            <div className="container">
                {props.children}
            </div>
        </section>
    )
}

export default HomeLayout;