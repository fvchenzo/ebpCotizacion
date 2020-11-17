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
    shoppingCart: [],
  }
  
  /*
  checkListToShooppingCart = () => {
    if (this.state.shoppingCart === 0) {
      alert("Debes agregar un producto como minimo")
    }
  }
  */
  addProductToShoppingCart = (product) => {
    console.log(this.state.shoppingCart);
    if (!product) return null
    if (this.state.shoppingCart.length === 0) {
      //console.log("Dentro del if");
      this.setState.shoppingCart = this.state.shoppingCart.push(product)
    }
    else {
      console.log(this.state.shoppingCart);
      if (this.state.shoppingCart.find(element => product.id === element.id)) {
        console.log(`Ya se agrego este producto:${product.id}` );
        alert("ya se agregó este producto")
      } else {
        this.setState.shoppingCart = this.state.shoppingCart.push(product)
      }
    }

    console.log(this.state.shoppingCart.length);
  }

  deleteProductToShoppingCart = () => {
    console.log("borrar producto de lista de carrito de compra");
  }

  render() {
    console.log(this.state.shoppingCart);
    return (
      <Router>
        <Header />
        
        <Switch>
          {/* <Route path="/" exact component={Home}></Route> */}
          <Route path="/cotizacion" render={ () => (
            <Quotation 
              shoppingCart={this.state.shoppingCart}
              deleteProductToShoppingCart={this.deleteProductToShoppingCart}
            />
            )}>
          </Route>

          <Route path="/" render={ () => (
            <Products 
              products={this.state.products}
              addProductToShoppingCart={this.addProductToShoppingCart}
            />
            )}>
          </Route>
          
          <Route component={Error}></Route>
        </Switch>
      </Router>
    )
  }
}

export default Routes;