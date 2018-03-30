import React, { Component } from 'react';

class BolListHeader extends Component {

render() {
    return (
      <React.Fragment>
      <div className="un">UN #</div>
      <div className="nos">Shipping Name</div>
      <div className="classDG">Class</div>
      <div className="pg">PG</div>
      <div className="tox">Toxic</div>
      <div className="desc">Product Name</div>
      <div className="qty">Qty</div>
      <div className="kg">Weight</div>
      <div className="subTotal">SubTot</div>
      <div className="bol-line"></div>
      </React.Fragment>
    );
  }
}

export default BolListHeader;