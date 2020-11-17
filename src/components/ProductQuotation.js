import React, { Component } from 'react';

class ProductQuotation extends Component {
  render() {
    const productToListShoppingCart = this.props.productToListShoppingCart;

    return(
      <tr>
        <td> {productToListShoppingCart.id} </td>
        <td> {productToListShoppingCart.name} </td>
        <td><img src={`assets/img/products/${productToListShoppingCart.name}.jpeg`} alt={productToListShoppingCart.name} width='100%' /></td>
        <td> {productToListShoppingCart.desc} </td>
        <td>
          Precio por unidad: {productToListShoppingCart.price} <br></br>
          Precio por 3 unidades: {productToListShoppingCart.priceX3Unt} <br></br>
          Precio por 6 unidades: {productToListShoppingCart.priceX6Unt} <br></br>
          Precio por 12 unidades: {productToListShoppingCart.priceX12Unt} <br></br>
          Precio por box: {productToListShoppingCart.box} <br></br>
        </td>
        <td>
          <label>
            <input type="number" value="1" ></input>
          </label>
          
        </td>
        <td>
          <button type="button" className="alert button"
            onClick={() => this.props.deleteProductToShoppingCart()}
          >Borrar</button>
        </td>
      </tr>
    )
  }
}

export default ProductQuotation;