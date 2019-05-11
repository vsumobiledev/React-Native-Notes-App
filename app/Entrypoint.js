import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Navigator from 'app/navigation';
import configureStore from 'app/store/configureStore';
const { store } = configureStore();

export default class Entrypoint extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <Navigator />
        </PersistGate> */}
        <Navigator />
      </Provider>
    );
  }
}
