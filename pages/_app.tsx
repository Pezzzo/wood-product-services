import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { persistor, store } from '../store/store';
import { defaultTheme } from '../styles/defaultTheme';
import { GlobalStyle } from '../styles/global';
import { PersistGate } from 'redux-persist/integration/react';
import Layout from '../components/layout/layout';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};
