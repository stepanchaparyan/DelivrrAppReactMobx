import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import '../../stylesheets/updateProduct.scss';
//import { Redirect } from 'react-router-dom';
import store from '../../store/productsStore';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types'; 
import messages from '../../en.messages';

@observer
class UpdateProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      [props.data]: ''
    }
  }

  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    product: PropTypes.shape ({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.string,
      quantity: PropTypes.string,
    })  
}
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  updateProduct = (e) => {
    e.preventDefault();
    const { product } = this.props;
    store.updateProduct(this.props.data, this.state[this.props.data], product.id);
    this.setState({
      [this.props.data]: ''
    });
  }

  render () {
  const { product } = this.props;
  //if (!auth.uid) return <Redirect to='/signin' /> 
  if (product) {
      return (
        <div className="detailsPage">          
            <Input onChange={this.handleChange} className="col input" value={this.state[this.props.data]} name={this.props.data} id={this.props.data} type="text" placeholder={this.props.data}/>
            <Button onClick={this.updateProduct} outline color="info" className="col updatebtn" id="btn" size="sm">{messages.update}</Button>
        </div>
      )
    } else {
      return (
        <div className="container center">
          <p>{messages.loadingProject}</p>
        </div>
      )
    }
  }
}

export default UpdateProduct