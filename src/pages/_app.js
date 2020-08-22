import React from 'react'
import {GlobalStyle} from "../Components/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
