import React, { Component } from 'react';
import AddProduct from './AddProduct';
import ProductList from './ProductList';

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
        <div className="container mt50">
        <div className="box">
            <h2>Output</h2>
            
        </div>

      </div>
       </React.Fragment> 
    );
  }
}

export default Form;