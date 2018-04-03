import React, { Component } from 'react';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import Bol from './Bol';
import base from "./base";

class Form extends Component {

state = {
  order: {},
  products: {},
  shipFrom: {
    company: "",
    address: "",
    address2:"",
    contact: "",
    phone: ""
  },
  shipTo: {
    company: "",
    address: "",
    address2:"",
    contact: "",
    phone: ""
  },
  profile: {
    number: ""
  }
};
   

componentDidMount() {
this.ref = base.syncState(`${this.props.userId}/products`, { 
  context: this, 
  state: 'products'
});
}

componentWillUnmount() {
  base.removeBinding(this.ref);
}

addToOrder = (key, value) => {
  const order = {...this.state.order};
  order[key] = order[key] + value || value;
  this.setState({order: order});
}
subFromOrder = (key, value) => {
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

deleteProduct = key => {
  const products = {...this.state.products};
  const order = {...this.state.order}
  products[key] = null;
  delete order[key];
  this.setState({order, products});
}
eraseAll = () => {
  let products = {...this.state.products};
  let order = {...this.state.order};
  let shipFrom = {...this.state.shipFrom}
  let shipTo = {...this.state.shipTo}
  let profile = {...this.state.profile}
  Object.keys(products).forEach( key => products[key] = null);
  order = {};
  shipFrom = {
    company: "",
    address: "",
    address2:"",
    contact: "",
    phone: ""
  };
  shipTo = {
    company: "",
    address: "",
    address2:"",
    contact: "",
    phone: ""
  };
  profile = {
    number: ""
  };
  this.setState({order, products, shipFrom, shipTo, profile});
}

addNumber = newNum => {
  let profile = {...this.state.profile};
  profile.number = newNum;
  this.setState({profile});
}

changeShipFrom = (updatedShipFrom) => {
  let shipFrom = {...this.state.shipFrom};
  shipFrom = updatedShipFrom;
  this.setState({shipFrom});
}

changeShipTo = (updatedShipTo) => {
  let shipTo = {...this.state.shipTo};
  shipTo = updatedShipTo;
  this.setState({shipTo});
}

render() {
    return (
       <React.Fragment> 
        <section className="container hello mt50">
        <AddProduct addProduct={this.addProduct}/>
        <ProductList 
            products={this.state.products}
            addToOrder={this.addToOrder}
            subFromOrder={this.subFromOrder}
            deleteProduct={this.deleteProduct}/>
        </section>
        <Bol 
            products={this.state.products}
            order={this.state.order}
            number={this.state.profile.number}
            addNumber={this.addNumber}
            shipFrom={this.state.shipFrom}
            changeShipFrom={this.changeShipFrom}
            shipTo={this.state.shipTo}
            changeShipTo={this.changeShipTo}
            logout={this.props.logout}
            eraseAll={this.eraseAll}
            />
       </React.Fragment> 
    );
  }
}

export default Form;