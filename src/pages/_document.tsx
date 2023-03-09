import { Html, Head, Main, NextScript } from 'next/document'
import { NextSeo } from 'next-seo'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <NextSeo
        title="TurboCore"
        description="TODO."
        canonical="https://turbocore.org/"
        // openGraph={{todo: "TODO"}}
        // twitter={{todo: "TODO"}}
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
