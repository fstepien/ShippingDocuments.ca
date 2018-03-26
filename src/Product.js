import React from 'react';


class Product extends React.Component {


render() {
  
const {desc, classDG, pg, nos, kg} = this.props.details;



return (
<li className="product">
        <h3 className="product-desc">{desc}
        <span className="product-kg">{kg}</span>
        </h3>
        <p>{desc}</p>
        
      </li>
       
    );
  }
}

export default Product;