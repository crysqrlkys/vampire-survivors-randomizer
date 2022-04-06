import React from 'react';
import * as ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import BuildCard from './components/BuildCard';
import { Provider } from 'react-redux';
import store from './store';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BuildCard />
    </Provider>
  </React.StrictMode>
);

// reportWebVitals(console.log);
