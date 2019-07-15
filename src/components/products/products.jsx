import React, { Component } from 'react';
import ProductList from '../products/productList';
// import Notifications from './notifications';
// import { Redirect } from 'react-router-dom';
import '../../stylesheets/products.scss';
import AddProduct from '../products/addProduct';
import DocumentTitle from 'react-document-title';
import {FormattedMessage} from 'react-intl';

class Products extends Component {
  render() {
    // const { products, auth, notifications } = this.props;
    // if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <DocumentTitle title='Delivery Products'>
        <div className="productPage">
            <div className="productListTitle">
            <FormattedMessage
                  id="productsList"
                  defaultMessage='Products List'
            />
            </div>
            <ProductList />
            <hr />
            <hr />
            <div className="productListTitle">
            <FormattedMessage
                  id="addNewProduct"
                  defaultMessage='Add new product'
            />            
            </div>
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