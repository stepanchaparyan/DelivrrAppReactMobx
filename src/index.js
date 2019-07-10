import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import fbConfig from './config/fbConfig';
import store from './store/store';
import { Provider } from 'mobx-react';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

registerServiceWorker();




