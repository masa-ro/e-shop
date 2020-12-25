import React from 'react';
import {render} from 'react-dom';
import './index.css';

import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import productsReducer from './reducers/Products';
import usersReducer from './reducers/Users';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import Products from './containers/Products';
import Search from './containers/Search';
import Users from './containers/Users';

const rootReducer = combineReducers({
  productsReducer, usersReducer,
})

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <Router>
      <Route exact path="/items" component={Search}/>
      <Route exact path='/items' component={Products}/>
      <Route exact path="/users" component={Users}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
