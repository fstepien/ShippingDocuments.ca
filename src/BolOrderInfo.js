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

state = {
  date: ""
}

changeDate = () => {
  let date = {...this.state.date};
  date = this.dateRef.value.value;
  this.setState({date})
}

render() {

    return (
      <div className="bol-info">
        <span>Date:</span> <input ref={this.dateRef} type="text" onChange={this.changeDate} value={this.state.date}/>
        <span>Order Number:</span> <input type="text" />
        <span>PO Number:</span> <input type="text" />
      </div>
    );
  }
}

export default OrderInfo;