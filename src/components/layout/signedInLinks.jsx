import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from 'reactstrap';
import './navbar.scss';

 const SignedInLinks = (props) => {
  return (
    <div>
      <Nav pills>
        <NavLink exact to='/shops' className="text-white nav-text">Shops</NavLink>
        <NavLink exact to='/products' className="text-white nav-text">Products</NavLink>
        {/* <NavItem onClick={props.signOut} className="text-white nav-text">Sign Out</NavItem> */}
        {/* <NavLink exact to='/' className="text-white nav-text profileName">{props.profile.firstName}</NavLink> */}
      </Nav>
    </div>
  )
}

export default SignedInLinks