import React, { Component } from 'react';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import Bol from './bol';

class Form extends Component {

state = {
  order: {},
  products: {}
};

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
        <ProductList products={this.state.products}/>
        </section>
        <Bol />
       </React.Fragment> 
    );
  }
}

export default Form;