import React from 'react';


class ProductListItem extends React.Component {

numberRef = React.createRef();

state = {
  number: 1 
};

changeValue = (e) => {
  let number = {...this.state.number};
  number = this.numberRef.value.value;  
  this.setState({number});

}

plusClick = () => {
  
    this.props.addToOrder(this.props.index, this.numberRef.value.value);
}

render() {
  
// const {desc, classDG, pg, nos, kg} = this.props.details;
const {desc} = this.props.details;

return (
<li className="product-item">
            <span className="product-item-name"> 
              {desc}
            </span>
            <span className="product-item-change">
              <img src="/assets/minus-square.svg" alt="minus"/>
              <input type="number" value={this.state.number} ref={this.numberRef} onChange={this.changeValue}/>
              <img src="/assets/plus-square.svg" alt="plus" onClick={this.plusClick}/>
            </span>
          </li>

    );
  }
}

export default ProductListItem;