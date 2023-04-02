import "../styles/globals.scss"
import type { AppProps } from 'next/app'
import { useEffect } from "react"


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const {
      applyPolyfills,
      defineCustomElements,
    } = require('@salla.sa/twilight-components/loader');
    applyPolyfills().then(() => {
      defineCustomElements(window);
    });
    return () => {};
  }, []);
  return <Component {...pageProps} />;
}
