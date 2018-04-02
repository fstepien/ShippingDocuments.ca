import React, { Component } from 'react';

class OrderInfo extends Component {

componentWillMount() {
const today = new Date();
const dd = today.getDate();
const mm = today.getMonth()+1; 
const yyyy = today.getFullYear(); 
const startDate = `${yyyy} - ${mm} - ${dd}`; 
this.setState({date: startDate})
}

dateRef = React.createRef();
poRef = React.createRef();
orderRef = React.createRef();

state = {
  date: "",
  po: "",
  order: ""
}

changeDate = () => {
  let date = {...this.state.date};
  date = this.dateRef.value.value;
  this.setState({date})
}
changePo = () => {
  let po = {...this.state.po};
  po = this.poRef.value.value;
  this.setState({po})
}
changeOrder = () => {
  let order = {...this.state.order};
  order = this.orderRef.value.value;
  this.setState({order})
}

render() {

    return (
      <div className="bol-info">
        <span>Date:</span> 
        <input 
          ref={this.dateRef} 
          type="text" 
          onChange={this.changeDate} 
          value={this.state.date}/>
        <span>Order Number:</span> 
        <input 
          ref={this.orderRef} 
          type="text" 
          onChange={this.changeOrder} 
          value={this.state.order} />
        <span>PO Number:</span> 
        <input 
          ref={this.poRef} 
          type="text" 
          onChange={this.changePo} 
          value={this.state.po} />
      </div>
    );
  }
}

export default OrderInfo;