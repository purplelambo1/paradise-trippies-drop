import 'styles/globals.css';

import { AppProps } from 'next/app'
import { DAppProvider } from "@usedapp/core";

import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <DAppProvider config={{}}>
      <Head>
        <title>Mint a Trippy</title>
      </Head>
      <Component {...pageProps} />
    </DAppProvider>
  )
}

export default App
