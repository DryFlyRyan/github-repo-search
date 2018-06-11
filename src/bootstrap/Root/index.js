import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../../App';
import { DevTools } from '../../services/configureStore';

export const Root = ({ store }) => { // eslint-disable-line
  return (
    <Provider store={store}>
      <BrowserRouter>
        {render()}
      </BrowserRouter>
    </Provider>
  );
};

const render = () => {
  if (process.env.NODE_ENV === 'production') {
    return <App />;
  }
  return (
    <React.Fragment>
      <DevTools />
      <App />
    </React.Fragment>
  );
};

export default Root;
