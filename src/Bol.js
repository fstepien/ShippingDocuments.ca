import React, { Component } from 'react';
import Consignor from './BolConsignor';
import Consignee from './BolConsignee';
import BolListHeader from './BolListHeader';
import Product from './Product';


class Bol extends Component {

render() {
const orderIds = Object.keys(this.props.order);
const total = orderIds.reduce((prevTotal, key) => {
  const product = this.props.products[key];
  const count = this.props.order[key];
  if(product){
    return prevTotal + (count * product.kg)
  } 
  return prevTotal;
}, 0)

    return (
       <React.Fragment> 
        <div className="container mt50">
          <div className="box bol-form">
              <h2>Bill of Lading</h2>
              
              <div className="bol-list">
                <Consignor />
                <Consignee />
                <BolListHeader />
                {orderIds.map(key => {
                        return <Product 
                          key={key}
                          product={this.props.products[key]}
                          count={this.props.order[key]} />
                    })}
                             
              </div>
              <div className="total">
                <strong>Total Weight {Number(total).toFixed(2)} kg / {Number(total * 2.20462).toFixed(2)} lb.</strong>
              </div>
          </div>
        </div>
       </React.Fragment> 
    );
  }
}

export default Bol;