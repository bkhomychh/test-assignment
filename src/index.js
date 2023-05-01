import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from 'components/App';
import ScrollToTop from 'components/ScrollToTop';

import { store, persistor } from 'redux/store';
import 'styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename="/test-assignment">
          <App />
          <ScrollToTop />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
