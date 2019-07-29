import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { observer } from 'mobx-react';
import { Router } from 'react-router';
import Navbar from './components/layout/navbar';
import Dashboard from './components/dashboard/dashboard';
import Shops from './components/shops/shops';
import Products from './components/products/products';
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';
import ForgotPassword from './components/auth/forgotPassword';
import store from './store/languagesStore';
import firebase from './config/fbConfig';

import messagesEN from './en.messages';
import messagesHY from './hy.messages';
import {addLocaleData, IntlProvider} from 'react-intl';
import en from 'react-intl/locale-data/en';
import hy from 'react-intl/locale-data/hy';
addLocaleData([...en]);
addLocaleData([...hy]);

const messages = {
  en: messagesEN,
  hy: messagesHY
};

var createBrowserHistory = require('history').createBrowserHistory;
const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routingStore);

@observer
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: user });
      } else {
        this.setState({ user: null });
      }
    });
  }


  render() {
    let lang = store.language;
    return ( 
      <>
      {!this.state.user ? 
      ( <IntlProvider locale={lang} messages={messages[lang]} key={lang}>
          <Router history={history}>
            <>
            <Navbar />
            <Route 
                exact
                path='/'
                render={() => 
                <Dashboard />}
            />
            <Route
                path='/signIn'
                render={() => 
                <SignIn />}
            />
            <Route
                path='/forgotPassword'
                render={() => 
                <ForgotPassword />}
            />
            <Route
                path='/signUp'
                render={() => 
                <SignUp />}
            />
            </>      
          </Router>
        </IntlProvider>
      ) : 
      (<IntlProvider locale={lang} messages={messages[lang]} key={lang}>
          <Router history={history}>
            <div className="App">
              <Navbar user={this.state.user} />
              <Switch>  
                  <Route 
                      exact
                      path='/'
                      render={() => 
                      <Dashboard />}
                  />
                  <Route
                      path='/shops'
                      render={(props) => 
                      <Shops {...props} store={store} />}
                  />
                  <Route
                      path='/products'
                      render={(props) => 
                      <Products {...props} store={store} />}
                  />
                  <Route
                      path='*'
                      render={() => 
                      <Dashboard />}
                  />
              </Switch>
            </div>
          </Router>
      </IntlProvider>
      )}
     </>  
    );
   
  }
}

export default App;
