import React from "react";
import { NavLink } from "react-router-dom";
import './header.scss';
import ApiClient from "../../http/apiClient";

const Header = (props) => {
    return(
        <header className="Header">
        <nav className="Header-nav navbar navbar-expand fixed-top">
            <NavLink className="navbar-brand" to="/" >
                <img src="./images/spotify.svg" width="40" height="40" className="d-inline-block align-top" alt="" />
            </NavLink>
            <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample05">
                <ul className="navbar-nav">
                    {
                        props.data.items.map((item)=>{
                            return(
                                <li className="nav-item" key={item.id}>
                                    <NavLink exact className="nav-link" to={item.url} activeClassName="is-selected">
                                        <img src={item.img} width="38" height="38" className="d-inline-block align-top" alt={item.description} />
                                    </NavLink>
                                </li>            
                            )
                        })
                    }
                </ul>
            </div>
            <NavLink className="navbar-brand" to="/" onClick={ApiClient.exit}>
                <img src="./images/off.svg" width="40" height="40" className="d-inline-block align-top"  />
            </NavLink>
        </nav>
        </header>
    )
}

export default Header;
