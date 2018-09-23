import React, { Component } from 'react';
import InfoComponent from './Info.jsx';
import MapComponent from './Map.jsx';

class GeomapComponent extends Component {
    render() {
        return (
            <div className="geomap">
                <InfoComponent />
                <MapComponent />
            </div>
        );
    }
}

export default GeomapComponent;
