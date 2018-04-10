import React from 'react';

class AddProduct extends React.Component {

descRef = React.createRef();
unRef = React.createRef();
classDGRef = React.createRef();
pgRef = React.createRef();
nosRef = React.createRef();
kgRef = React.createRef();

//Property instead of a method
addProduct = (e) => {
    e.preventDefault();
    const product = {
      desc: this.descRef.value.value,
      un: this.unRef.value.value, 
      classDG: this.classDGRef.value.value, 
      pg: this.pgRef.value.value,
      nos: this.nosRef.value.value,
      kg: this.kgRef.value.value
    }
    this.props.addProduct(product);
    e.currentTarget.reset();
}

render() {
if(this.pgRef){
  console.log('empty');
} else {
  console.log(`not empty ${this.pgRef}`)
}
return (
  <div className="box">
    <span className="add-product-label">Add Products</span>
    <form className="product-edit" onSubmit={this.addProduct}>
      <input name="desc" ref={this.descRef} type="text" placeholder="Product Name" required />
      <input name="un" ref={this.unRef} type="text" placeholder="UN Number" pattern="[0-9]{4}" title="UN numbers are four-digit numbers"/>
      <input name="class" ref={this.classDGRef} type="text" placeholder="Class" />
      <select name="pg" ref={this.pgRef} type="text" placeholder="P.G."> 
        <option defaultValue value="">P.G.</option>
        <option>I</option>
        <option>II</option>
        <option>III</option>
      </select>
      <input name="kg" ref={this.kgRef} type="text" placeholder="Weight (kg)" required/>
      <input name="nos" ref={this.nosRef} type="text" placeholder="N.O.S." />
      <button type="submit">+ Add Product</button>
    </form>
  </div>
       
    );
  }
}

export default AddProduct;