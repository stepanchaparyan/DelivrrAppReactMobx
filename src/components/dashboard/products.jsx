import React, { Component } from 'react';
import ProductList from '../products/productList';
// import Notifications from './notifications';
// import { Redirect } from 'react-router-dom';
import './products.scss';
import AddProduct from '../products/addProduct';

class Products extends Component {
  render() {
    // const { products, auth, notifications } = this.props;
    // if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="productPage">
        <div className="productListTitle">Product list</div>
          <ProductList />
          <hr />
          <hr />
          <div className="productListTitle">Add new Product</div>
          <hr />
          <hr />
          <AddProduct />
          <hr />
          {/* <Notifications notifications={notifications} />    */}
      </div>
    )
  }
}

export default Products