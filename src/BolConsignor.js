import React, { Component } from 'react';

class Consignor extends Component {

render() {
    return (
  
        <div className="bol-left">
          <div>CONSIGNOR / SHIP FROM </div>
          <span>Company: </span><input type="text"/>
          <span>Address:</span> <input type="text"/>
          <input type="text"/>
          <span>Contact Name:</span> <input type="text"/>
          <span>Phone:</span> <input type="text"/>
        </div>
    );
  }
}

export default Consignor;