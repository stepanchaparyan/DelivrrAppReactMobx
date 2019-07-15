import React, { Component, Fragment } from 'react';
import { Table, Button } from 'reactstrap';
import '../../stylesheets/productList.scss';
import UpdateProduct from './updateProduct';
import store from '../../store/productsStore';
import { observer } from 'mobx-react';
import messages from '../../en.messages';

@observer
class ProductList extends Component {  
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
  
  deleteProduct = (e) => { 
    console.log(e)
    const productNumber = e.target.id;
    store.deleteProduct(productNumber)
  };

  render () {
    const { products } = store;
    return ( 
        <Table striped>
          <thead>
            <tr>
                <th className="firstTD">#</th>
                <th>{messages.name}</th>
                <th>{messages.price}</th>
                <th>{messages.quantity}</th> 
            </tr>
          </thead>
          <tbody> 
            { products && products.map((product, i) => {
                return (
                  <Fragment key={i}>
                  <tr key={i}>
                    <td className="firstTD">{i+1}</td>
                    <td>{product.name}</td>             
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td id={i} className="x" onClick={this.deleteProduct}>x</td>
                    <td id="tdButton">
                      <Button className="btnUpdate" outline color="info" id={i} onClick={this.toggle}>{messages.update}</Button>
                    </td>
                  </tr>
                  { this.state.show && i===this.state.id ? 
                  <tr className="updateTR">
                    <td className="emptySpace"></td>
                    <td>      
                      <UpdateProduct id={product.id} data="name" product={product}/>  
                    </td>
                    <td>
                      <UpdateProduct id={product.id} data="price" product={product}/>
                    </td>                  
                    <td>
                      <UpdateProduct id={product.id} data="quantity" product={product}/>
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

 export default ProductList