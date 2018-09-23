import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class HeaderComponent extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <div className="logo__img"></div>
                    <div className="logo__data">
                        <div className="logo__name">GEOTRACK</div>
                        <div className="logo__version">ver 1.0</div>
                    </div>
                </div>
                <nav className="main-menu">
                    <ul>
                        <li><NavLink to="/geomap" activeClassName="active">GEOMAP</NavLink></li>
                        <li><NavLink exact to="/" activeClassName="active">HOME</NavLink></li>
                        <li><NavLink to="/about" activeClassName="active">ABOUT</NavLink></li>
                        <li><NavLink to="/features" activeClassName="active">FEATURES</NavLink></li>
                        <li><NavLink to="/pricing" activeClassName="active">PRICING</NavLink></li>
                    </ul>
                </nav>
                <div className="search-field">
                    <div className="search-field__search-button"></div>
                    <input type="text" placeholder="Search geotrack" />
                </div>
                <div className="user">
                    <img src="/images/user-photo.jpg" alt="User avatar" width="43" height="43" />
                </div>
            </div>
        );
    }
}

export default HeaderComponent;
