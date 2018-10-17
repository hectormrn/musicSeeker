import React from "react";
import '../layouts.scss';

const ProfileLayout = (props) => (
    <section className="main" style={{marginTop:'0px'}}>
        {props.children}
    </section>
)

export default ProfileLayout;