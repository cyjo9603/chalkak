import React from 'react';
import Document, { Main, NextScript, DocumentContext } from 'next/document';
import Helmet, { HelmetData } from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';

interface Props {
  helmet: HelmetData;
  styleTags: any;
}

class MyDocument extends Document<Props> {
  static async getInitialProps(context: DocumentContext) {
    const initailProps = await Document.getInitialProps(context);
    const sheet = new ServerStyleSheet();
    const page = context.renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...initailProps, ...page, helmet: Helmet.renderStatic(), styleTags };
  }

  render() {
    const { htmlAttributes, bodyAttributes, ...helmet } = this.props.helmet;
    const htmlAttrs = htmlAttributes.toComponent();
    const bodyAttrs = bodyAttributes.toComponent();

    return (
      <html {...htmlAttrs} lang="ko">
        <head>
          {this.props.styleTags}
          {Object.values(helmet).map((el) => el.toComponent())}
        </head>
        <body {...bodyAttrs}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
