import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import './updateProduct.scss';
import { Redirect } from 'react-router-dom';

class UpdateProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      [props.data]: ''
    }
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  updateProduct = (e) => {
    e.preventDefault();
    const { productId } = this.props;
    this.props.updateProduct(this.props.data, this.state[this.props.data], productId);
    this.setState({
      [this.props.data]: ''
    });
  }

  render () {
  const { auth, product } = this.props;
  //console.log('Details - props ', this.props);
  if (!auth.uid) return <Redirect to='/signin' /> 
  if (product) {
      return (
        <div className="detailsPage">          
            <Input onChange={this.handleChange} className="col input" value={this.state[this.props.data]} name={this.props.data} id={this.props.data} type="text" placeholder={this.props.data}/>
            <Button onClick={this.updateProduct} outline color="info" className="col updatebtn" id="btn" size="sm">Update</Button>
        </div>
      )
    } else {
      return (
        <div className="container center">
          <p>Loading project...</p>
        </div>
      )
    }
  }
}

export default UpdateProduct