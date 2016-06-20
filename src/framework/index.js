'use strict';
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, IndexRedirect, browserHistory, Redirect} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import {Provider} from 'react-redux';

import store from '../store';
import DevTools from '../components/DevTools';
import App from '../sections/App';
import Landing from '../sections/Landing';

const history = syncHistoryWithStore(browserHistory, store);

export default function() {
  var container = document.createElement('div');
  container.id = 'container';
  document.body.appendChild(container);

  render((
    <Provider store={store}>
      <div id="content">
        <Router history={history}>
          <Route path="/*" component={App}>
            <IndexRoute component={Landing} />
          </Route>
        </Router>
        <DevTools />
      </div>
    </Provider>
  ),container);
};
