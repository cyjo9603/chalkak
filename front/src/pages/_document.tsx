import React from 'react';
import Document, { Main, Head, NextScript, DocumentContext } from 'next/document';
import Helmet, { HelmetData } from 'react-helmet';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';

interface Props {
  helmet: HelmetData;
  styleTags: Array<React.ReactElement<{}>>;
}

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

class MyDocument extends Document<Props> {
  static async getInitialProps(context: DocumentContext) {
    const initailProps = await Document.getInitialProps(context);
    const sheet = new ServerStyleSheet();
    const page = context.renderPage((App) => (props) =>
      sheet.collectStyles(
        <>
          <GolbalStyle />
          <App {...props} />
        </>,
      ),
    );
    const styleTags = sheet.getStyleElement();
    return { ...initailProps, ...page, helmet: Helmet.renderStatic(), styleTags };
  }

  render() {
    const { htmlAttributes, bodyAttributes, ...helmet } = this.props.helmet;
    const htmlAttrs = htmlAttributes.toComponent();
    const bodyAttrs = bodyAttributes.toComponent();

    return (
      <html {...htmlAttrs} lang="ko">
        <Head>
          {this.props.styleTags}
          {Object.values(helmet).map((el) => el.toComponent())}
        </Head>
        <body {...bodyAttrs}>
          <Main />
          {process.env.NODE_ENV === 'production' && (
            <script src="https://polyfill.io/v3/polyfill.min.js?features=es6,es7,es8,es9,NodeList.prototype.forEach&flags=gated" />
          )}
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
