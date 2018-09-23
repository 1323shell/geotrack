import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import '../App.css';
import HeaderComponent from './Header.jsx';
import GeomapComponent from './geomap/Geomap.jsx';
import HomeComponent from './Home.jsx';
import AboutComponent from './About.jsx';
import FeaturesComponent from './Features.jsx';
import PricingComponent from './Pricing.jsx';
import NotFoundComponent from './NotFound.jsx';
import FooterComponent from './Footer.jsx';
import ApiComponent from './Api.jsx';
import SupportComponent from './Support.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <Switch>
              <Route path="/geomap" component={GeomapComponent} />
              <Route exact path="/" component={HomeComponent} />
              <Route path="/about" component={AboutComponent} />
              <Route path="/features" component={FeaturesComponent} />
              <Route path="/pricing" component={PricingComponent} />
              <Route path="/api" component={ApiComponent} />
              <Route path="/support" component={SupportComponent} />
              <Route component={NotFoundComponent} />
        </Switch>
        <FooterComponent />
      </div>
    );
  }
}

export default App;
