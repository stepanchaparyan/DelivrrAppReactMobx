import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import '../../stylesheets/updateShop.scss';
//import { Redirect } from 'react-router-dom';
import store from '../../store/shopsStore';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types'; 
import messages from '../../en.messages';

@observer
class UpdateShop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      [props.data]: ''
    }
  }

  static propTypes = {
      id: PropTypes.number,
      name: PropTypes.string,
      shop: PropTypes.shape ({
        id: PropTypes.number,
        name: PropTypes.string,
        address: PropTypes.string,
        city: PropTypes.string,
      })  
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
            <Button onClick={this.updateShop} outline color="info" className="col updatebtn" id="btn" size="sm">{messages.update}</Button>
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

export default UpdateShop