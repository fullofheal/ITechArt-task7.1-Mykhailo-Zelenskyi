import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';

const store = configureStore({
  reducer: rootReducer
});

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
