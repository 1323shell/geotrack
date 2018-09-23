import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class FooterComponent extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer__copyright">
                    <div className="footer__copyright__name">GEOTRACK</div>
                    <div>© Geotrack Inc. All rights reserved 2016</div>
                </div>
                <div className="footer__menu-and-social">
                    <nav className="footer__menu">
                        <ul>
                            <li><NavLink to="/api">APP API</NavLink></li>
                            <li><NavLink to="/support">SUPPORT</NavLink></li>
                        </ul>
                    </nav>
                    <div className="footer__social">
                        <a className="footer__social__fb" href="https://www.facebook.com/"></a>
                        <a className="footer__social__tw" href="https://twitter.com/"></a>
                        <a className="footer__social__ins" href="https://www.instagram.com/"></a>
                        <a className="footer__social__vm" href="https://vimeo.com/"></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterComponent;
