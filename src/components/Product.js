/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

class Product extends Component {
  render() {
  //const { id, name, desc, price, priceX3Unit, priceX6Unt, priceX12Unt, box } = this.props.information;
  const infoProduct = this.props.information;
  
  return(
        <div className="col-lg-3">
          <div className="card mb-4 shadow-sm">
          <img className="card-img-top" src="http://placehold.it/300x400" alt={infoProduct.name} />
          <div className="card-body">
            <h4>{infoProduct.name}</h4>
            <p className="card-text">{infoProduct.desc}</p>
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="text-left"> S/. {infoProduct.price}</h4>
              <a className="btn btn-primary text-right"
                onClick={() => this.props.addProductToShoppingCart(infoProduct)}
              >Comprar</a>
            </div>
          </div>
        </div>
        </div>
  )
  }
}

export default Product;