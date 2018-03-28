import React, { Component } from 'react';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import Bol from './Bol';

class Form extends Component {

state = {
  order: {},
  products: {}
};

addToOrder = (key) => {
  console.log(key);
  const order = {...this.state.order};
  order[key] = order[key] + 1 || 1;
  this.setState({order: order});
}

addProduct = product => {
  const products = {...this.state.products};
  products[`product${Date.now()}`] = product;
  this.setState({
    products: products
  });
};

render() {
    return (
       <React.Fragment> 
        <section className="container hello mt50">
        <AddProduct addProduct={this.addProduct} />
        <ProductList 
            products={this.state.products}
            addToOrder={this.addToOrder}/>
        </section>
        <Bol />
       </React.Fragment> 
    );
  }
}

export default Form;