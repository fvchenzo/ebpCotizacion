import React, { Component } from 'react';
import ListProducts from './ListProducts';

class Products extends Component {
  render () {
    return (
      <div>
        <h2>Nuestros Productos</h2>
        <ListProducts
          products={this.props.products}
        />
      </div>
    )
  }
}

export default Products