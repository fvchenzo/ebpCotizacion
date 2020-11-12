import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListProducts from './ListProducts';

class Products extends Component {
  render () {
    return (
      <div className="text-center">
        <h2>Nuestros Productos</h2>
        <h6 className="subheader">Texto informativo</h6> <br></br>

        <Link to="/cotizacion" className="primary button"> Ver tu carrito de Compra</Link>
        <hr></hr>

        <ListProducts
          products={this.props.products}
          addProductToShoppingCart={this.props.addProductToShoppingCart}
        />
      </div>
    )
  }
}

export default Products