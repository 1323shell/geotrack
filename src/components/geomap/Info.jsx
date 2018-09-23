import React, { Component } from 'react';

class InfoComponent extends Component {
    render() {
        return (
            <div className="geo-info">
                <div className="geo-info__header">
                    <div className="geo-info__header__logo">
                        <div className="geo-info__header__logo__img">
                            <img src="/images/university.jpg" alt="Name of the place" width="84px" height="84px" />
                        </div>
                        <div className="geo-info__header__logo__qr-code">
                            <a href="#">
                                <img src="/images/qr-code.png" alt="Водяной знак" width="28px" height="28px" />
                            </a>
                        </div>
                        <button className="geo-info__header__logo__somewhere-button"></button>
                    </div>
                    <div className="geo-info__header__name">California University</div>
                    <div className="geo-info__header__id">ID: 01234567890123456789089</div>
                    <button className="geo-info__header__copy">Copy in buffer</button>
                </div>
                <div className="geo-info__data">
                    <div className="geo-info__data__elem">
                        <div>Geo Type:</div>
                        <div>Government</div>
                    </div>
                    <div className="geo-info__data__elem">
                        <div>Short Geo:</div>
                        <div>CA_University</div>
                    </div>
                    <div className="geo-info__data__elem">
                        <div>Adress:</div>
                        <div>United States, California LA, Saringza Avenue, 44A</div>
                    </div>
                    <div className="geo-info__data__elem">
                        <div>Email:</div>
                        <div>ca#university@gmail.com</div>
                    </div>
                    <div className="geo-info__data__elem">
                        <div>Expiere:</div>
                        <div>31 oct 2016</div>
                    </div>
                    <div className="geo-info__data__elem">
                        <div>Privacy:</div>
                        <div>Enable</div>
                    </div>
                </div>
                <div className="geo-info__footer">
                    <button className="geo-info__footer__edit-profile">Edit Profile</button>
                </div>
            </div>
        );
    }
}

export default InfoComponent;