import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';


class Welcome extends Component {

state = { 
  x: 0, 
  y: 0,
  hover: false
}


_onMouseMove = e => {
  const width = e.currentTarget.offsetWidth;
  const height = e.currentTarget.offsetHeight;
  const walk = 50;
  const middleX = (e.pageX - e.currentTarget.parentElement.offsetLeft - width/2) * (-1) * walk / width;
  const middleY = (e.pageY - e.currentTarget.parentElement.offsetTop - 40 - height/2) * (-1) * walk / height;
  let stateX = {...this.state.x};
  let stateY = {...this.state.y};
  stateX = middleX;
  stateY = middleY;
  this.setState({x: stateX, y: stateY})
}

toggleHover = () =>{
  this.setState({hover: !this.state.hover})
}
laeveHover = () => {
let x = {...this.state.x}
let y = {...this.state.y}
x = 0;
y = 0;
this.setState({x, y});
this.toggleHover();
}

  render() {

    var scaleStyle;
    if (this.state.hover) {
      scaleStyle = 'scale(1.5)';
    } else {
      scaleStyle = 'scale(1)';
    }

    return (
    <React.Fragment>
      <section className="container hello mt50">
        <div className="box1">
          <h1>Need a TDG Bill of Lading quick? </h1>
          <p>The shipper of dangerous goods is responsible for properly completing a “shipping document” containing all information required by Transport of Dangerous Goods (TDG) Regulations. This document generator provides a Bill of Lading template that can be quickly filled out and printed by TDG trained individuals. </p>
          <Link to={`/BOL`}>
            <button type="submit" className="loginBtn">START NEW BOL →</button>
        </Link>
        </div>
        <div className="box overflowHidden">
                    <img 
              src="/assets/preview.png" 
              className="previewImg" 
              alt="bill of lading preview" 
              onMouseMove={this._onMouseMove.bind(this)}
              onMouseEnter={this.toggleHover} 
              onMouseLeave={this.laeveHover}
              style={{
                transform: `translateX(${this.state.x}%) translateY(${this.state.y}%) ${scaleStyle}`,
                transition: '1s'
            }}
              />
          </div>
      </section>
      <section className="container user-list">
            <div className="user-item">
              <p>"We don't regularly ship haz mat and our ERP is not set up for it. This has been a go to form to make sure the carrier accepts my shipping documents" </p>
              <span>Warehouse Manager<br /> Brampton, ON</span>
            </div>
            <div className="user-item">
            <p>"My customers appreciate when I send a bill of lading with RMAs or warehouse transfers. I keep commodity products in the database and "erase all" after shipping propriatery products."</p>
            <span>Technical Sales Manager <br />Ajax, ON</span>
            </div>
            <div className="user-item">
              <p>"We manufacture and ship metal parts. ShippingDocuments.ca has saved me time when shipping out empty dangerous goods containers back to the supplier" </p>
              <span>Plant Manager <br />Etobicoke, ON</span>
            </div>
      </section>
      <Footer />
    </React.Fragment>
    );
  }
}

export default Welcome;
