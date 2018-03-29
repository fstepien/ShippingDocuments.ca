import React from 'react';
import ProductListItem from './ProductListItem';

class ProductList extends React.Component {

render() {
  
return (
  <div className="box">
    <span className="my-product-label">My Products</span>
    <ul className="product-list">
      {Object.keys(this.props.products)
      .sort((a,b) => this.props.products[a].desc.toLowerCase() > this.props.products[b].desc.toLowerCase() ? 1: -1)
      .map(key => (
          <ProductListItem 
            key={key}
            index={key}
            details={this.props.products[key]}
            addToOrder={this.props.addToOrder}
            subFromOrder={this.props.subFromOrder}/>
      ))}
    </ul>
  </div>
       
    );
  }
}

export default ProductList;