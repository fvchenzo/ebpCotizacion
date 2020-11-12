import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ListQuotation from './ListQuotation';

class Quotation extends Component {

  render() {
    console.log("Desde cotización");
    console.log(this.props.shoppingCart)
    return(
      <div className="text-center">
        <h2>Tú Lista de Pedido</h2>
        <h6 className="subheader">Aquí puedes modificar la cantidad de cada producto</h6> <br></br>

        <hr></hr>
        <div className="text-right">
          <Link to="/" className="button primary">Seguir Comprando</Link>
        </div>
        <ListQuotation
          shoppingCart={this.props.shoppingCart}
          deleteProductToShoppingCart={this.props.deleteProductToShoppingCart}
        />
      </div>
    )
  }
}

export default Quotation;