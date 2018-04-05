import React, { Component } from 'react';

class OrderInfo extends Component {

componentWillMount() {
const today = new Date();
const dd = today.getDate();
const mm = today.getMonth()+1; 
const yyyy = today.getFullYear(); 
const startDate = `${yyyy} - ${mm} - ${dd}`; 
const updatedOrderInfo = {
  ...this.props.orderInfo, 
  date: startDate
};
this.props.changeOrderInfo(updatedOrderInfo);
}

handleChange = e => {
  const updatedOrderInfo = {
    ...this.props.orderInfo, 
    [e.currentTarget.name]: e.currentTarget.value
  };
  this.props.changeOrderInfo(updatedOrderInfo);
}

render() {

    return (
      <div className="bol-info">
        <span>Date:</span> 
        <input 
          name="date"
          type="text" 
          onChange={this.handleChange} 
          value={this.props.orderInfo.date}/>
        <span>Order Number:</span> 
        <input 
          name="order"
          type="text" 
          onChange={this.handleChange} 
          value={this.props.orderInfo.order} />
        <span>PO Number:</span> 
        <input 
          name="po" 
          type="text" 
          onChange={this.handleChange} 
          value={this.props.orderInfo.po} />
      </div>
    );
  }
}

export default OrderInfo;