/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Product = ( props ) => {
  const { id, name, desc, price, priceX3Unit, priceX6Unt, priceX12Unt, box } = props.information;

  return (
      <tr>
        <td> {id} </td>
        <td> {name} </td>
        <td><img src={`assets/img/products/${name}.jpeg`} alt={name} width='20%' /></td>
        <td> {desc} </td>
        <td> 
          Precio por unidad: {price} <br></br>
          Precio por 3 unidades: {priceX3Unit} <br></br>
          Precio por 6 unidades: {priceX6Unt} <br></br>
          Precio por 12 unidades: {priceX12Unt} <br></br>
          Precio por box: {box} <br></br>
        </td>
        <td>
          <input type="text"></input>
        </td>
        <td>
          <button type="button" className="success button">Agregar</button>
          <button type="button" className="warning button">Modificar</button>
          <button type="button" className="alert button">Borrar</button>
        </td>
      </tr>
    )
}

export default Product;