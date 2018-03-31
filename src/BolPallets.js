import React, { Component } from 'react';

class Pallets extends Component {

palletRef = React.createRef();

state = {
  note: "1 pallet" 
};

changeNote = (e) => {
  let note = {...this.state.note};
  note = this.palletRef.value.value;
  this.setState({note})
}

render() {
    return (
      <div className="pallets">
        Packaging Units: <input type="text" value={this.state.note} ref={this.palletRef} onChange={this.changeNote}/>
      </div>
    );
  }
}

export default Pallets;