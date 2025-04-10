


import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App.jsx';
import Store from './assets/component/REDUX/Store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <App />
  </Provider>
);