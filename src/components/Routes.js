import React, { Component } from 'react';
import { BrowserRouter as Router,  Switch,  Route } from "react-router-dom";
// import Home from './Home';
import Header from './Header';
import Products from './Products';
import Quotation from './Quotation';
import Error from './Error';
import infoProducts from '../data/products.json';

class Routes extends Component {

  state = {
    products: infoProducts,
  }

  render() {
    return (
      <Router>
        <Header />

        <Switch>
          {/* <Route path="/" exact component={Home}></Route> */}
          <Route path="/" render={ () => (
            <Products products={this.state.products}></Products>
            )}>
          </Route>
          
          <Route exact path="/cotizacion" component={Quotation}></Route>
          <Route component={Error}></Route>
        </Switch>
      </Router>
    )
  }
}

export default Routes;