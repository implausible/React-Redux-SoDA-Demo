import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Demo from './containers/Demo';
import Store from './Store';

require('../static/style');
ReactDOM.render(
  (
    <Provider store={Store}>
      <Demo />
    </Provider>
  ),
  document.getElementById('root')
);
