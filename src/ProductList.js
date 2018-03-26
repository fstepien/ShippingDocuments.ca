import React from 'react';
import Product from './Product';

class ProductList extends React.Component {


render() {
return (
  <div className="box">
    <ul className="product-list">
      {Object.keys(this.props.products).map(key => 
      <li key={key}>{this.props.products.desc}</li>
      )}
    </ul>
  </div>
       
    );
  }
}

export default ProductList;