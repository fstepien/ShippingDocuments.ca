import React from 'react';


class ProductList extends React.Component {


render() {
return (
  <div className="box">
    <span className="my-product-label">My Products</span>
    <ul className="product-list">
      {Object.keys(this.props.products)
      .sort((a,b) => this.props.products[a].desc.toLowerCase() > this.props.products[b].desc.toLowerCase() ? 1: -1)
      .map(key => (
          <li key={key} className="product-item">{this.props.products[key].desc}</li>
      ))}
    </ul>
  </div>
       
    );
  }
}

export default ProductList;