import App, { Container } from 'next/app';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from './../redux/store';
import Loader from '../components/Loader';

class MyApp extends App {
  render() {
    const { Component, pageProps, store, router } = this.props;
    // console.log('Environment: ', process.env.NODE_ENV);

    return <Container>
      <Provider store={store}>
        {router.route !== '/' ? <PersistGate persistor={store.__persistor}>
          {bootstrapped => {
            if (bootstrapped) {
              return <Component {...pageProps} />;
            }
            return <Loader reduxLoader={true} />;
          }}
        </PersistGate> : <Component {...pageProps} />}
      </Provider>
    </Container>;
  }
}

export default withRedux(configureStore)(MyApp);
