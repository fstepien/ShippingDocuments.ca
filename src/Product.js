import React from 'react';


class Product extends React.Component {


render() {
  
const {product, count} = this.props;



return (
<React.Fragment>    
    <div className="un">{product.un == "" ? 0 : product.un}</div>
    <div className="nos">{product.nos}</div>
    <div className="classDG">{product.classDG}</div>
    <div className="pg">{product.pg}</div>
    <div className="tox">Tox</div>
    <div className="desc">{product.desc}</div>
    <div className="qty">{count}</div>
    <div className="kg">{Number(product.kg).toFixed(1)} kg</div>
    <div className="subTotal">{Number(count * product.kg).toFixed(1)} kg</div>
    <div className="bol-line"></div>
</React.Fragment>
       
    );
  }
}

export default Product;