import { ServerStyleSheets } from '@material-ui/styles';
import Document, {
  DocumentContext,
  Head,
  Main,
  Html,
  NextScript,
} from 'next/document';
import React from 'react';

export default class DeDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

DeDocument.getInitialProps = async (context: DocumentContext) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const muiStyleSheets = new ServerStyleSheets();
  const originalRenderPage = context.renderPage;
  context.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        muiStyleSheets.collect(<App {...props} />),
    });
  const initialProps = await Document.getInitialProps(context);
  return {
    ...initialProps,
    styles: <>{muiStyleSheets.getStyleElement()}</>,
  };
};
