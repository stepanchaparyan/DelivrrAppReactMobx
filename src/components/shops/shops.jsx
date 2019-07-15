import React, { Component } from 'react';
import ShopList from '../shops/shopList';
import AddShop from '../shops/addShop';
import '../../stylesheets/shops.scss';
// import Notifications from './notifications';
// import { Redirect } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import {FormattedMessage} from 'react-intl';

class Shops extends Component {
  render() {
    // if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <DocumentTitle title='Delivery Shops'>
        <div className="shopPage">
          <div className="shopListTitle">
            <FormattedMessage
                  id="shopsList"
                  defaultMessage='Shops List'
            />
          </div>
            <ShopList />
            <hr />
            <hr />
            <div className="shopListTitle">
              <FormattedMessage
                    id="addNewShop"
                    defaultMessage='Add new shop'
              />
            </div>
            <hr />
            <hr />
            <AddShop />
            <hr />
            {/* <Notifications notifications={notifications} />    */}
        </div>
      </DocumentTitle>
    )
  }
}

export default Shops