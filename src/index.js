import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'components/App';
import { Provider } from 'react-redux';
import store from 'redux/store';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
