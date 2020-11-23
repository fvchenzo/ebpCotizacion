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
            addProductToShoppingCart={this.props.addProductToShoppingCart}
          />
        ))}
      </React.Fragment>
    )
  }

  render(){
    return(
      <div className="album py-5">
        <div className="container">
          <div className="row">
            {this.showProducts()}
          </div>
        </div>
      </div>
        
        
    )
  }
}
export default ListProducts;