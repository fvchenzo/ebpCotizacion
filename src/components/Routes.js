import React, { Component } from 'react';
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import Home from './Home';
import Error from './Error';
import infoProducts from '../data/products.json';

class Routes extends Component {

  state = {
    productos : infoProducts,
  }

  render() {
    return (
      <Router>



        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route component={Error}></Route>
        </Switch>
      </Router>
    )
  }
}

export default Routes;