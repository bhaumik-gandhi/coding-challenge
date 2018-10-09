import * as React from 'react';
import { Provider } from 'react-redux';

import Router from './src/Navigation';
import store from './src/Store';

export default class App extends React.Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}