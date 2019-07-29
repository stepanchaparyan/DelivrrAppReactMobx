import React, {Component} from 'react'
import SignedInLinks from './signedInLinks'
import SignedOutLinks from './signedOutLinks'
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import '../../stylesheets/navbar.scss';
import { FaTruck } from 'react-icons/fa';
import {FormattedMessage} from 'react-intl';
import store from '../../store/languagesStore';
import { observer } from 'mobx-react';
import firebase from '../../config/fbConfig';

@observer
class MyNavbar extends Component {

  changeLanguageToHY = () => { 
      store.changeLanguageToHY();
  };

  changeLanguageToEN = () => { 
      store.changeLanguageToEN();
  };

  signOut = () => {
      firebase.auth().signOut();
  }  

  render () {
    const { user } = this.props;
    const links = user ? <SignedInLinks user={user} signOut={this.signOut}/> : <SignedOutLinks />;

    return (
      <Navbar className="p-2 bg-info text-white" light expand="md">
        <Container>
        <div className="iconAndTitle">
            <div className="FaTruck"> <FaTruck /></div>
            <NavbarBrand href="/">
              <FormattedMessage
                  id="projectTitle"
                  defaultMessage='projectTitle'
              />
              </NavbarBrand>
        </div>
        {links}
        <button id='btnLang' onClick={this.changeLanguageToHY}>Arm</button>
        <button id='btnLang' onClick={this.changeLanguageToEN}>Eng</button>  
        </Container>
      </Navbar>
    )
  }
}

export default MyNavbar