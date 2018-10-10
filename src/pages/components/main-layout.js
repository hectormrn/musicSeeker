import React from "react";
import './main-layout.scss';

function MainLayout (props) {
    return (
        <section className="main">
            <div className="container">
                {props.children}
            </div>
        </section>
    )
}

export default MainLayout;