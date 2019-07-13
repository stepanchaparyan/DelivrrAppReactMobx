import React, { Component } from 'react';
import ProductList from '../products/productList';
// import Notifications from './notifications';
// import { Redirect } from 'react-router-dom';
import '../../stylesheets/products.scss';
import AddProduct from '../products/addProduct';
import DocumentTitle from 'react-document-title';

class Products extends Component {
  render() {
    // const { products, auth, notifications } = this.props;
    // if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <DocumentTitle title='Delivery Products'>
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
      </DocumentTitle>
    )
  }
}

export default Products