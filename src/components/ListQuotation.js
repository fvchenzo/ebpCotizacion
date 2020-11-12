import React, { Component } from 'react';
import ProductQuotation from './ProductQuotation';

class ListQuotation extends Component {
  showShoppingCart = () => {
    const listShoppingCart = this.props.shoppingCart

    if (listShoppingCart.length === 0) return (null)

    return (
      <React.Fragment>
        {Object.keys(listShoppingCart).map(productQuotation => (
          <ProductQuotation
            productToListShoppingCart={listShoppingCart[productQuotation]}
            key={productQuotation}
            deleteProductToShoppingCart={this.props.deleteProductToShoppingCart}
          />
        ))}
      </React.Fragment>
    )
  }

  render () {
    
    return(
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Producto</th>
            <th scope="col" width="10%">Imagen</th>
            <th scope="col" width="25%">Descripción</th>
            <th scope="col">Precio</th>
            <th scope="col" width="5%">Cantidad</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          {this.showShoppingCart()}
        </tbody>
      </table>
    )
  }
}

export default ListQuotation;
