import React, { Component } from 'react';
import ReactToPrint from "react-to-print";
import OrderInfo from './BolOrderInfo';
import Consignor from './BolConsignor';
import Consignee from './BolConsignee';
import BolListHeader from './BolListHeader';
import Product from './Product';
import Pallets from './BolPallets';
import BolFooter from './BolFooter';


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
        <ReactToPrint
          trigger={() => <a href="#"><img id="print" src="/assets/print.svg" alt="minus" title="Print BOL"/></a>}
          content={() => this.bolRef}
          
        /> 
          <div className="box bol-form" ref={el => (this.bolRef = el)}>  
              <div className="bol-list">
                <h2>Bill of Lading</h2>
                <OrderInfo />
                <Consignor />
                <Consignee />
                <BolListHeader />
                {orderIds
                  .sort((a,b) => this.props.products[a].desc.toLowerCase() > this.props.products[b].desc.toLowerCase() ? 1: -1)
                  .map(key => {
                        return <Product 
                          key={key}
                          product={this.props.products[key]}
                          count={this.props.order[key]} />
                    })}
                <div className="total">
                <strong>Total Weight {Number(total).toFixed(2)} kg / {Number(total * 2.20462).toFixed(2)} lb.</strong>
                </div>
                <Pallets />
                <BolFooter 
                  addNumber={this.props.addNumber}
                  number={this.props.number}/>              
              </div>
              
          </div>
        </div>
       </React.Fragment> 
    );
  }
}

export default Bol;