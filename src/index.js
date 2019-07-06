import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import fbConfig from './config/fbConfig';

import store from './store/store';
import Shops from './components/dashboard/shops';
import Products from './components/dashboard/products';
import Dashboard from './components/dashboard/dashboard';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router';
import Navbar from './components/layout/navbar';

var createBrowserHistory = require('history').createBrowserHistory;
const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <Navbar />
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
    </Provider>,
    document.getElementById('root')
  );

registerServiceWorker();




