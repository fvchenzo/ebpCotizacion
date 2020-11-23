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
          <button type="button" className="btn btn-danger"
            onClick={() => this.props.deleteProductToShoppingCart()}
          >
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
            </svg>
          </button>
        </td>
      </tr>
    )
  }
}

export default ProductQuotation;