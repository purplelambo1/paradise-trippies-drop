import Document, { Html, Head, Main, NextScript } from 'next/document'
import { c } from 'config'

class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
          <meta property="og:description" content={c.headerDescription}/>
          <meta name="description" content={c.headerDescription}/>
          <meta property="og:title" content={c.title}/>
          <meta property="og:site_name" content={c.title}/>
          <meta property="og:url" content="paradisenft.art"></meta>
          <link rel="shortcut icon" href="/favicon.ico"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
