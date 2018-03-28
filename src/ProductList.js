import React from 'react';

class ProductList extends React.Component {

plusClick = () => {
  this.props.addToOrder(this.props.index);
}

render() {
  
return (
  <div className="box">
    <span className="my-product-label">My Products</span>
    <ul className="product-list">
      {Object.keys(this.props.products)
      .sort((a,b) => this.props.products[a].desc.toLowerCase() > this.props.products[b].desc.toLowerCase() ? 1: -1)
      .map(key => (
          <li key={key} index={key} className="product-item">
            <span className="product-item-name"> 
              {this.props.products[key].desc}</span>
            <span className="product-item-change">
              <img src="/assets/minus-square.svg" alt="minus"/>
              <input type="number" placeholder="1"/>
              <img src="/assets/plus-square.svg" alt="plus" onClick={this.plusClick}/>
            </span>
          </li>
      ))}
    </ul>
  </div>
       
    );
  }
}

export default ProductList;