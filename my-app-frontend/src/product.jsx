import React from "react";
import "./product.css";

class Product extends React.Component{
    render(){
        const products=this.props.products.map(product =>(
            <div className="product" key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>{product.price}</p>
            </div>
        ));

        return(
            <div className="product-container">
                <h2>Products</h2>
                {products}
            </div>
        );
    }
}


export default Product;