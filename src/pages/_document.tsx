import React from "react";
import Document, {DocumentContext, Html, Head, Main, NextScript, DocumentInitialProps} from 'next/document';
import {getDataFromTree} from "@apollo/client/react/ssr";
import {createApolloClient} from '@graphql/client';

type DocumentProps = DocumentInitialProps & {
  apolloState: object;
};

class exhibition2021Document extends Document<DocumentProps> {
  constructor(props: any) {
    super(props);
    
    const {
      apolloState,
      __NEXT_DATA__
    } = props;
    
    __NEXT_DATA__.apolloState = apolloState;
  }
  
  static async getInitialProps(ctx: DocumentContext) {
    const apolloClient = createApolloClient({});
    
    const renderPage = ctx.renderPage;
    const renderPageEnhancer = {
      enhanceApp: (App: any) =>
        (ctx: any) => <App {...ctx} apolloClient={apolloClient} />
    };
    
    ctx.renderPage = () =>
      renderPage(renderPageEnhancer);
    
    await getDataFromTree(
      // @ts-ignore
      <ctx.AppTree {...ctx.appProps} apolloClient={apolloClient} />
    );
    
    const apolloState = (
      apolloClient.extract()
    );
    
    const documentProps = (
      await Document.getInitialProps(ctx)
    );
    
    return {
      apolloState,
      ...documentProps
    };
  }
  
  render() {
    return (
      <Html lang="ko">
        <Head title="20`21 웹 아카이브전 무균전시 : 새 시대 새 빛"/>
        <body>
        <div className="container">
          <Main/>
        </div>
        <NextScript/>
        <div id="modal-root"/>
        </body>
      </Html>
    )
  }
}

export default exhibition2021Document;
