import React from 'react';
import ReactDOM from 'react-dom/client';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import theme from 'theme/theme';
import { Provider } from 'react-redux';
import { ChakraProvider } from '../node_modules/@chakra-ui/react/dist/chakra-provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </PersistGate>
  </Provider>
);
