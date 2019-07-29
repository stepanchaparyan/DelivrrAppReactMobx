import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap';
import '../../stylesheets/navbar.scss';
import {FormattedMessage} from 'react-intl';
import { observer } from 'mobx-react';

@observer
class SignedInLinks extends Component {
  render () {
    return (
      <Nav pills>
        <NavLink exact to='/shops' className="text-white nav-text">
          <FormattedMessage
              id="shops"
              defaultMessage='Shops'
          />
        </NavLink>
        <NavLink exact to='/products' className="text-white nav-text">
          <FormattedMessage
              id="products"
              defaultMessage='Products'
          />
        </NavLink>
        <NavItem onClick={this.props.signOut} className="text-white nav-text">
          <FormattedMessage
                id="signOut"
                defaultMessage='Sign Out'
          />
        </NavItem>
        <NavLink exact to='/' className="text-white nav-text profileName">{this.props.user.email}</NavLink>
      </Nav>
    )
  }
}

export default SignedInLinks