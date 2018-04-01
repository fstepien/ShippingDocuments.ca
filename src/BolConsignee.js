import React, { Component } from 'react';

class Consignee extends Component {

render() {
    return (
        <div className="bol-consignee">
          <div>CONSIGNEE / SHIP TO</div>
          <span>Company: </span><input type="text"/>
          <span>Address:</span> <input type="text"/>
          <input type="text"/>
          <span>Contact Name:</span> <input type="text"/>
          <span>Phone:</span> <input type="text"/>
        </div>

    );
  }
}

export default Consignee;