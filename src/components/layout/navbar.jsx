import React, {Component} from 'react'
import SignedInLinks from './signedInLinks'
// import SignedOutLinks from './signedOutLinks'
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import '../../stylesheets/navbar.scss';
import { FaTruck } from 'react-icons/fa';
import {FormattedMessage} from 'react-intl';
import store from '../../store/store';
import { observer } from 'mobx-react';

@observer
class MyNavbar extends Component {
  //const { auth, profile } = props;
  //const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

  changeLanguageToHY = () => { 
      store.changeLanguageToHY();
  };

  changeLanguageToEN = () => { 
      store.changeLanguageToEN();
  };

  render () {
    return (
      <Navbar className="p-2 bg-info text-white" light expand="md">
        <Container>
        <div className="iconAndTitle">
            <div className="FaTruck"> <FaTruck /></div>
            <NavbarBrand href="/">
              <FormattedMessage
                  id="projectTitle"
                  defaultMessage='hy'
              />
              </NavbarBrand>
        </div>
        <SignedInLinks />
        {/* {links} */}
        {/* <button onClick={this.changeLanguageToHY}>AM</button>
        <button onClick={this.changeLanguageToEN}>EN</button> */}
        </Container>
      </Navbar>
    )
  }
}

export default MyNavbar