/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

class Product extends Component {
  render() {
  //const { id, name, desc, price, priceX3Unit, priceX6Unt, priceX12Unt, box } = this.props.information;
  const infoProduct = this.props.information;
  
  return(
    <div className="cell">
      <div className="card">
        <img src={`assets/img/products/${infoProduct.name}.jpeg`} alt={infoProduct.name} />
        <div className="card-section">
          <h4>{infoProduct.name}</h4>
          <p>{infoProduct.desc}</p>
        </div>
        <div className="card-section">
          <div className="grid-x">
            <div className="cell small-9">
              <h4 className="text-left"> S/. {infoProduct.price}</h4>
            </div>
            <div className="cell large-auto">
              <a className="primary button text-right"
                onClick={() => this.props.addProductToShoppingCart(infoProduct)}
              >Agregar</a>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  )
  }
}

export default Product;