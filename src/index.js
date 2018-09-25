import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore,applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom'
// import {browserHistory } from 'react-router'
import rootReducer from './redux/boardGameMeetupReducer'
import registerServiceWorker from './registerServiceWorker';
import thunk from "redux-thunk";
import { syncHistoryWithStore, routerReducer,routerMiddleware } from 'react-router-redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,composeEnhancers(applyMiddleware(thunk))
)
// const history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(
  <Provider store= {store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
