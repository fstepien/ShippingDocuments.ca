import React, { Component } from 'react';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import Bol from './Bol';

class Form extends Component {

state = {
  order: {},
  products: {}
};

addToOrder = (key, value) => {
  console.log(key, value);
  const order = {...this.state.order};
  order[key] = order[key] + value || value;
  this.setState({order: order});
}
subFromOrder = (key, value) => {
  console.log(key, value);
  const order = {...this.state.order};
  order[key] >= value ? order[key] = order[key] - value : order[key] = 0;
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
            addToOrder={this.addToOrder}
            subFromOrder={this.subFromOrder}/>
        </section>
        <Bol 
            products={this.state.products}
            order={this.state.order}/>
       </React.Fragment> 
    );
  }
}

export default Form;