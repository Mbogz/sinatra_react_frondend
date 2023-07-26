import React from "react";
import "./order.css";

class Order extends React.Component{
    render(){
        const orders = this.props.orders.map(order =>(
            <div className ="order" key={order.id}>
                <h3>Order #{order.id}</h3>
                <p>User: {order.user.name}</p>
                <p>Products:</p>
                <ul>
                    {order.products.map(product =>(
                        <li key={product.id}>
                            {product.name} ({product.price})
                        </li>
                    ))}
                </ul>
            </div>
        ));

        return(
            <div className="order-container">
                <h2>Orders</h2>
                {orders}
            </div>
        );
    }
}

export default Order;