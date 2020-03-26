/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Helmet from 'react-helmet';
import withRedux, { MakeStoreOptions } from 'next-redux-wrapper';
import { AppProps, AppContext, Container } from 'next/app';
import withReduxSaga from 'next-redux-saga';
import createSagaMiddleware from 'redux-saga';
import { createStore, Store, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';

import reducer from '../reducers';
import rootSaga from '../sagas/index';
import theme from '../theme';

interface Props {
  Component: AppProps['Component'];
  store: Store;
  pageProps: AppProps['pageProps'];
}

const Chalkak = ({ Component, store, pageProps }: Props) => {
  return (
    <Container>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Helmet>
            <title>chalkak</title>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover"
            />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="description" content="Chalkak" />
            <meta name="og:title" content="Chalkak" />
            <meta name="og:description" content="Chalkak" />
            <meta property="og:type" content="website" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js"></script>
          </Helmet>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </Container>
  );
};

Chalkak.getInitialProps = async (context: AppContext) => {
  const { ctx, Component } = context;
  let pageProps = {};
  const cookie = ctx.isServer && ctx.req ? ctx.req.headers.cookie : null;
  if (ctx.isServer && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

const configureStore = (initialState: any, options: MakeStoreOptions) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : compose(
          applyMiddleware(...middlewares),
          !options.isServer && (window as any).__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
            ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
            : (f: any) => f,
        );

  const store: any = createStore(reducer, initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export default withRedux(configureStore)(withReduxSaga(Chalkak));
