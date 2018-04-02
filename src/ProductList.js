import React from 'react';
import ProductListItem from './ProductListItem';

class ProductList extends React.Component {

labelRef = React.createRef();

render() {
 
const availProducts = Object.keys(this.props.products).length === 0 && this.props.products.constructor === Object;  
  
return (
  <div className="box">
    <span className="my-product-label" data-state={!availProducts} ref={this.labelRef} >My Products</span>
    { availProducts ? 
    "" :
    <ul className="product-list">
      
        {Object.keys(this.props.products)
      .sort((a,b) => this.props.products[a].desc.toLowerCase() > this.props.products[b].desc.toLowerCase() ? 1: -1)
      .map(key => (
          <ProductListItem 
            key={key}
            index={key}
            details={this.props.products[key]}
            addToOrder={this.props.addToOrder}
            subFromOrder={this.props.subFromOrder}
            deleteProduct={this.props.deleteProduct}/>
      ))}
    </ul>}
  </div>
       
    );
  }
}

export default ProductList;