import React, { Component } from 'react';
import ShopList from '../shops/shopList';
import AddShop from '../shops/addShop';
import '../../stylesheets/shops.scss';
import messages from '../../en.messages';
// import Notifications from './notifications';
// import { Redirect } from 'react-router-dom';

class Shops extends Component {
  render() {
    // if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="shopPage">
        <div className="shopListTitle">{messages.shopsPage.title}</div>
          <ShopList props={this.props}/>
          <hr />
          <hr />
          <div className="shopListTitle">{messages.shopsPage.addNewShop}</div>
          <hr />
          <hr />
          <AddShop />
          <hr />
          {/* <Notifications notifications={notifications} />    */}
      </div>
    )
  }
}

export default Shops