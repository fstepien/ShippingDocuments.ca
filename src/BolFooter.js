import React, { Component } from 'react';

class BolFooter extends Component {

  handleChange = e => {
    const updatedShippingInfo = {
      ...this.props.shippingInfo, 
      [e.currentTarget.name]: e.currentTarget.value
    };
    this.props.changeShippingInfo(updatedShippingInfo);
  }

render() {

const { carrier, name, number, terms } = this.props.shippingInfo;

    return (
      <React.Fragment>
      <div className="tel-number">
        <strong>24-Hour Number: </strong> 
        <input type="text" value={number} onChange={this.handleChange} name="number" placeholder="enter a 24-number"/>
      </div>
      <p className="consignors-cert">I hereby declare that the contents of this consignment are fully and accurately described above by the proper shipping name, are properly classified and packaged, have dangerous goods safety marks properly affixed or displayed on them, and are in all respects in proper condition for transport according to the Transportation of Dangerous Goods Regulations.</p>
      <div className="bol-left">
        <span>Shipper Name: </span>
        <input type="text" value={name} onChange={this.handleChange} name="name"/>
      </div>
      <div className="bol-right">
      <span>Driver: </span>
        <input className="driver" type="text" disabled/>
      </div>
      <div className="bol-right">
      <span>Carrier: </span>
        <input type="text" value={carrier} onChange={this.handleChange} name="carrier" />
        
        <select type="text" name="terms" value={terms} onChange={this.handleChange} >
          <option value="PPA">PPA</option>
          <option value="PPD">PPD</option>
          <option value="Collect">Collect</option>
          <option value="Customer">Customer Pick Up</option>
        </select>
      </div>
      </React.Fragment>
    );
  }
}

export default BolFooter;