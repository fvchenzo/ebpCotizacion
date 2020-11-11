import React, { Component } from 'react';
import Product from './Product';

class ListProducts extends Component {
  showProducts = () => {
    const listProducts = this.props.products
    
    if (listProducts.length === 0) return null
    
    return (
      <React.Fragment>
        {Object.keys(listProducts).map(product => (
          <Product 
            information={listProducts[product]}
            key={product}
          />
        ))}
      </React.Fragment>
    )
  }
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Producto</th>
            <th scope="col">Imagen</th>
            <th scope="col">Descripción</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          {this.showProducts()}
          
        </tbody>
      </table>
    )
  }
  
}

export default ListProducts;