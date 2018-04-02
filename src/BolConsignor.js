import React, { Component } from 'react';

class Consignor extends Component {

handleChange = e => {
  const updatedShipFrom = {
    ...this.props.shipFrom, 
    [e.currentTarget.name]: e.currentTarget.value
  };
  console.log(updatedShipFrom);
  this.props.changeShipFrom(updatedShipFrom);
}

render() {

const {company, address, address2, contact, phone} = this.props.shipFrom; 

    return (
  
        <div className="bol-left">
          <div>CONSIGNOR / SHIP FROM </div>
          <span>Company: </span><input type="text" name="company" value={company} onChange={this.handleChange}/>
          <span>Address:</span> <input name="address" type="text"value={address} onChange={this.handleChange}/>
          <input type="text" name="address2" value={address2} onChange={this.handleChange}/>
          <span>Contact Name:</span> <input type="text" name="contact" value={contact} onChange={this.handleChange}/>
          <span>Phone:</span> <input type="text" name="phone" value={phone} onChange={this.handleChange}/>
        </div>
    );
  }
}

export default Consignor;