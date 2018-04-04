import React, { Component } from 'react';
import { Link } from 'react-router-dom';



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
  console.log(middleX, middleY)
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
          /></div>
      </section>
    </React.Fragment>
    );
  }
}

export default Welcome;
