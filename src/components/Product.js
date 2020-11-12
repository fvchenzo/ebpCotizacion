/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

class Product extends Component {
  render() {
  //const { id, name, desc, price, priceX3Unit, priceX6Unt, priceX12Unt, box } = this.props.information;
  const infoProduct = this.props.information;

  return (
      <tr>
        <td> {infoProduct.id} </td>
        <td> {infoProduct.name} </td>
        <td><img src={`assets/img/products/${infoProduct.name}.jpeg`} alt={infoProduct.name} width='100%' /></td>
        <td> {infoProduct.desc} </td>
        <td> 
          Precio por unidad: {infoProduct.price} <br></br>
          Precio por 3 unidades: {infoProduct.priceX3Unit} <br></br>
          Precio por 6 unidades: {infoProduct.priceX6Unt} <br></br>
          Precio por 12 unidades: {infoProduct.priceX12Unt} <br></br>
          Precio por box: {infoProduct.box} <br></br>
        </td>
        <td>
          <input type="text"></input>
        </td>
        <td>
          <button type="button" className="primary button" 
                  onClick={() => this.props.addProductToShoppingCart(infoProduct)}
          >Agregar</button>
          
        </td>
      </tr>
    )
  }
}

export default Product;