import React, { Component } from 'react';

class MapComponent extends Component {
    constructor(props){
        super(props);

        let initialPosition = {
            lat: 48.858093,
            lng: 2.294694
        };

        this.state = {
            position: initialPosition
        }
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    /*componentWillMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    position: {lat: position.coords.latitude, lng: position.coords.longitude}
                });
            });
        }
    }*/

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let currentPosition = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                this.setState({
                    position: currentPosition
                });

                this.map = new window.google.maps.Map(this.refs.map, {
                    center: currentPosition,
                    zoom: 16
                });

                this.marker = new window.google.maps.Marker({
                    map: this.map,
                    position: currentPosition,
                    icon: '/images/map-icon.png',
                    animation: window.google.maps.Animation.DROP
                });

                let circlesNumber = 5;

                while (circlesNumber > 0) {
                    let cityCircle = new window.google.maps.Circle({
                        strokeWeight: 0,
                        fillColor: '#7a9ad5',
                        fillOpacity: 0.1,
                        map: this.map,
                        center: currentPosition,
                        radius: 15 * circlesNumber
                    });
                    circlesNumber--;
                }
            });

            /*Запрос с помощью FETCH*/

            /*это URL, который я использовал в файле index.html (он лежит в папке Public)*/
            fetch('https://maps.googleapis.com/maps/api/js?key=AIzaSyBMWfyCDkKI53vmxTegWBOnKEWsSvmRZKk&language=en&libraries=places&callback=initMap', {
                mode: 'cors'
            })
                //.then(response => response.json())
                .then(response => console.log('response===', response));


            /*Тот же запрос с помощью XMLHttpRequest*/

            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBMWfyCDkKI53vmxTegWBOnKEWsSvmRZKk&language=en&libraries=places&callback=initMap', true);
            xhr.send();

            xhr.onreadystatechange = function() {
                if (this.readyState !== 4) return;
                if (this.status !== 200) {
                    console.log( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
                    return;
                } else {
                    console.log( 'ответ: ' + xhr.responseText );
                }
            }
        }

        /*ДАЛЬШЕ МОЖЕШЬ НЕ СМОТРЕТЬ :)*/
    }

    render() {
        return (
            <div className="map">
                <div className="map__geo-message">
                    <div className="map__geo-message__name">Geo Message</div>
                    <div>Lorem ipsum — magna at sem eros maecenas quisque, vitae porttitor bibendum auctor rutrum. In,
                        massa amet nam quam — adipiscing, congue magna diam molestie ipsum lectus quisque mattis curabitur.</div>
                </div>
                <div className="map__map-container" ref="map">Google map should be here!</div>
            </div>
        );
    }
}

export default MapComponent;