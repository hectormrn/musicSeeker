import React from "react";
//TODO refactor this...
const Nav = (props) => (
        <nav className="navbar navbar-expand fixed-top navbar-dark bg-dark">
            <a className="navbar-brand" >
                <img src="./images/spotify.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
            </a>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample05">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                            <img src="./images/home.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <img src="./images/cd.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <img src="./images/cd.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <img src="./images/singing.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <img src="./images/sound-bars.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <img src="./images/user.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )

export default Nav;