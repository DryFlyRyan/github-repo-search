import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Root from './bootstrap/Root';
import configureStore from './services/configureStore';

// Wraps the app in the react-hot-loader to enable HMR on Components
const render = Component => {
  ReactDOM.render(
    <AppContainer>{Component}</AppContainer>,
    document.getElementById('root')
  );
};

const store = configureStore();

render(<Root store={store} />);

// Checks if HMR is enabled and listens for any file changes from the Root file and down
if (module.hot) {
  module.hot.accept('./bootstrap/Root', () => {
    render(<Root store={store} />);
  });
}

registerServiceWorker();
