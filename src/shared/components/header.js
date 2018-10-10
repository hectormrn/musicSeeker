import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
    return(
        <nav className="navbar navbar-expand fixed-top navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">
                <img src="./images/spotify.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
            </NavLink>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample05">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/" activeClassName="is-selected">
                            <img src="./images/home.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/tracks" activeClassName="is-selected">
                            <img src="./images/cd.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/albums" activeClassName="is-selected">
                            <img src="./images/cd.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/artist" activeClassName="is-selected">
                            <img src="./images/singing.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/now-playing" activeClassName="is-selected">
                            <img src="./images/sound-bars.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/profile" activeClassName="is-selected">
                            <img src="./images/user.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;
