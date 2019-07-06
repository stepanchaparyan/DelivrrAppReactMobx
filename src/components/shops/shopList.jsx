import React, { Component, Fragment } from 'react';
import { Table, Button } from 'reactstrap';
import './shopList.scss';
import UpdateShop from './updateShop';
import store from '../../store/store';
import { observer } from 'mobx-react';

@observer
class ShopList extends Component {

  toggle = this.toggle.bind(this);
  state = { 
      show: false,
      id: ''
  };

  toggle(e) {
    this.setState(({ 
      show: !this.state.show,
      id: Number(e.target.id) 
    }));
  }
  
  deleteShop = (e) => { 
    const shopNumber = e.target.id;
    store.deleteShop(shopNumber)
  };

  render () {
    const { shops } = store;
    return ( 
        <Table striped>
          <thead>
            <tr>
                <th className="firstTD">#</th>
                <th>Name</th>
                <th>City</th>
                <th>Address</th> 
            </tr>
          </thead>
          <tbody> 
            { shops && shops.map((shop, i) => {
                return (
                  <Fragment key={i}>
                  <tr key={i}>
                    <td className="firstTD">{i+1}</td>
                    <td>{shop.name}</td>             
                    <td>{shop.city}</td>
                    <td>{shop.address}</td>
                    <td id={i} className="x" onClick={this.deleteShop}>x</td>
                    <td id="tdButton">
                      <Button className="btnUpdate" outline color="info" id={i} onClick={this.toggle}>Update</Button>
                    </td>
                  </tr>
                  { this.state.show && i===this.state.id ? 
                  <tr className="updateTR">
                    <td className="emptySpace"></td>
                    <td>      
                      <UpdateShop id={shop.id} data="name" shop={shop}/>
                    </td>
                    <td>
                      <UpdateShop id={shop.id} data="city" shop={shop}/>
                    </td>                  
                    <td>
                      <UpdateShop id={shop.id} data="address" shop={shop}/>
                    </td>
                    <td className="emptySpace"></td>
                    <td className="emptySpace"></td>
                  </tr>  
                  : null }
                  </Fragment>
                )
              }
            )}                  
          </tbody>
      </Table>        
    )
  }
}

export default ShopList