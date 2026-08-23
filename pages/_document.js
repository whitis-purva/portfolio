import { Html, Head, Main, NextScript } from 'next/document'
import { withBasePath } from '@/lib/assetPath'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={withBasePath("/favicon.svg")} type="image/svg+xml" />
        <link rel="apple-touch-icon" href={withBasePath("/favicon.svg")} />
        {/* Hotjar tracking script */}
        <script src="https://t.contentsquare.net/uxa/6520863d3bc8d.js" async></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
