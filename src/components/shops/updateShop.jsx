import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import './updateShop.scss';
//import { Redirect } from 'react-router-dom';
import store from '../../store/store';
import { observer } from 'mobx-react';

@observer
class UpdateShop extends Component {
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

  updateShop = (e) => {
    e.preventDefault();
    const { shop } = this.props;
    store.updateShop(this.props.data, this.state[this.props.data], shop.id);
    this.setState({
      [this.props.data]: ''
    });
  }

  render () {
  const { shop } = this.props;
  // if (!auth.uid) return <Redirect to='/signin' /> 
  if (shop) {
      return (
        <div className="detailsPage">          
            <Input onChange={this.handleChange} className="col input" value={this.state[this.props.data]} name={this.props.data} id={this.props.data} type="text" placeholder={this.props.data}/>
            <Button onClick={this.updateShop} outline color="info" className="col updatebtn" id="btn" size="sm">Update</Button>
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

export default UpdateShop