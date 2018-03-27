import React from 'react';


class ProductList extends React.Component {


render() {

  const minus = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path d=\"M108 284c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v32c0 6.6-5.4 12-12 12H108zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z\"/></svg>"
  
return (
  <div className="box">
    <span className="my-product-label">My Products</span>
    <ul className="product-list">
      {Object.keys(this.props.products)
      .sort((a,b) => this.props.products[a].desc.toLowerCase() > this.props.products[b].desc.toLowerCase() ? 1: -1)
      .map(key => (
          <li key={key} className="product-item">
            <span className="product-item-name"> 
              {this.props.products[key].desc}</span>
            <span className="product-item-change">
              <img src="/assets/minus-square.svg" alt="minus"/>
              <input type="number" placeholder="1"/>
              <img src="/assets/plus-square.svg" alt="plus"/>
            </span>
          </li>
      ))}
    </ul>
  </div>
       
    );
  }
}

export default ProductList;