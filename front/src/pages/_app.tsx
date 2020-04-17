/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Helmet from 'react-helmet';
import withRedux, { MakeStoreOptions } from 'next-redux-wrapper';
import { AppProps, AppContext } from 'next/app';
import withReduxSaga from 'next-redux-saga';
import createSagaMiddleware from 'redux-saga';
import { createStore, Store, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import axios from 'axios';

import reducer from '../reducers';
import rootSaga from '../sagas/index';
import AppLayout from '../container/AppLayout';
import theme from '../theme';
import { getUserInfoRequest } from '../reducers/user/getUserInfo';
import { getNotifyRequest } from '../reducers/user/getNotify';

import 'antd/dist/antd.less';

const GolbalStyle = createGlobalStyle`
html {
  height: 100%;
}

body {
  @import url('https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap');
  background-color: #f0f2f5;
  height: 100%;
  font-weight: 900;

  & > #__next {
    height: 100%;
  }

  &  * {
    font-family: 'Nanum Gothic', sans-serif;
  }
}
`;

interface Props {
  Component: AppProps['Component'];
  store: Store;
  pageProps: AppProps['pageProps'];
}

const Chalkak = ({ Component, store, pageProps }: Props) => {
  return (
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
          <link rel="shortcut icon" href="/favicon2.ico" />
        </Helmet>
        <GolbalStyle />
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </Provider>
  );
};

Chalkak.getInitialProps = async (context: AppContext) => {
  const { ctx, Component } = context;
  let pageProps = {};
  const state = ctx.store.getState();
  const cookie = ctx.isServer && ctx.req ? ctx.req.headers.cookie : null;
  if (ctx.isServer && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  if (!state.user.info) {
    ctx.store.dispatch(getUserInfoRequest());
  }
  if (!state.user.notify) {
    ctx.store.dispatch(getNotifyRequest());
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
