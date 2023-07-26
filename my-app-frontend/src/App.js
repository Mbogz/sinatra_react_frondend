import React from 'react';
import axios from 'axios';
import User from './user';
import Product from './product';
import Order from './order';
import './App.css';

class App extends React.component{
  state = {
    user: [],
    products: [],
    orders: []
  }

  componentDidMount(){
    axios.get('/api/users')
    .then(response => {
      this.setState({ users: response.data });
    });

    axios.get('/api/products')
    .then(response => {
      this.setState({ products: response.data });
    });

    axios.get('/api/orders')
    .then(response => {
      this.setState({ orders: response.data });
    });
  }


  render(){
    return(
      <div className="app">
        <h1>Cosmetics Shop</h1>
        <div className="container">
          <User users={this.state.users}/>
          <Product products={this.state.products}/>
          <Order orders={this.state.orders}/>
        </div>
      </div>
    );
  }
}

export default App;
