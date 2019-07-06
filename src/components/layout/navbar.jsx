import React from 'react'
import SignedInLinks from './signedInLinks'
// import SignedOutLinks from './signedOutLinks'
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import './navbar.scss';
import { FaTruck } from 'react-icons/fa';

const MyNavbar = (props) => {
//const { auth, profile } = props;
//const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  return (
    <Navbar className="p-2 bg-info text-white" light expand="md">
      <Container>
      <div className="iconAndTitle">
          <div className="FaTruck"> <FaTruck /></div>
          <NavbarBrand href="/">Deliver App</NavbarBrand>
      </div>
      <SignedInLinks />
      {/* {links} */}
      </Container>
    </Navbar>
  )
}

export default MyNavbar