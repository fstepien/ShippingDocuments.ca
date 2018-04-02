import React, { Component } from 'react';

class BolFooter extends Component {

newNum = React.createRef();
nameRef = React.createRef();
carrierRef = React.createRef();
termsRef = React.createRef();

state = {
  name: "",
  carrier: "",
  terms: ""
}

changeName = () => {
  let name = {...this.state.name};
  name = this.nameRef.value.value;
  this.setState({name})
}
changeCarrier = () => {
  let carrier = {...this.state.carrier};
  carrier = this.carrierRef.value.value;
  this.setState({carrier})
}
changeTerms = () => {
  let terms = {...this.state.terms};
  terms = this.termsRef.value.value;
  this.setState({terms})
}

addNumber = (e) => {
  this.props.addNumber(this.newNum.value.value);
}

render() {
    return (
      <React.Fragment>
      <div className="tel-number">
        <strong>24-Hour Number: </strong> 
        <input type="text" value={this.props.number} onChange={this.addNumber} ref={this.newNum} placeholder="enter a 24-number"/>
      </div>
      <p className="consignors-cert">I hereby declare that the contents of this consignment are fully and accurately described above by the proper shipping name, are properly classified and packaged, have dangerous goods safety marks properly affixed or displayed on them, and are in all respects in proper condition for transport according to the Transportation of Dangerous Goods Regulations.</p>
      <div className="bol-left">
        <span>Shipper Name: </span>
        <input type="text" value={this.state.name} onChange={this.changeName} ref={this.nameRef}/>
      </div>
      <div className="bol-right">
      <span>Driver: </span>
        <input type="text" />
      </div>
      <div className="bol-right">
      <span>Carrier: </span>
        <input type="text" value={this.state.carrier} onChange={this.changeCarrier}       ref={this.carrierRef}/>
        
        <select type="text" name="terms" value={this.state.terms} onChange={this.changeTerms} ref={this.termsRef}>
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