import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from 'reactstrap';
import '../../stylesheets/navbar.scss';
import {FormattedMessage} from 'react-intl';

 const SignedInLinks = (props) => {
  return (
    <div>
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
        {/* <NavItem onClick={props.signOut} className="text-white nav-text">Sign Out</NavItem> */}
        {/* <NavLink exact to='/' className="text-white nav-text profileName">{props.profile.firstName}</NavLink> */}
      </Nav>
    </div>
  )
}

export default SignedInLinks