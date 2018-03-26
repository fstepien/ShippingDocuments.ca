import React from 'react';

class AddProduct extends React.Component {

descRef = React.createRef();
unRef = React.createRef();
classRef = React.createRef();
pgRef = React.createRef();
nosRef = React.createRef();
kgRef = React.createRef();

//Property instead of a method
addProduct = (e) => {
    e.preventDefault();
    const product = {
      desc: this.descRef.value.value,
      price: this.unRef.value.value, 
      class: this.classRef.value.value, 
      pg: this.pgRef.value.value,
      nos: this.nosRef.value.value,
      kg: this.kgRef.value.value
    }
    this.props.addProduct(product);
    e.currentTarget.reset();
}

render() {
return (
  <div className="box">
    <form className="product-edit" onSubmit={this.addProduct}>
      <input name="desc" ref={this.descRef} type="text" placeholder="Product Name" required />
      <input name="un" ref={this.unRef} type="text" placeholder="UN Number" />
      <input name="class" ref={this.classRef} type="text" placeholder="Class" />
      <input name="pg" ref={this.pgRef} type="text" placeholder="P.G." />
      <input name="kg" ref={this.kgRef} type="text" placeholder="Weight (kg)" />
      <input name="nos" ref={this.nosRef} type="text" placeholder="N.O.S." />
      <button type="submit">+ Add Product</button>
    </form>
  </div>
       
    );
  }
}

export default AddProduct;