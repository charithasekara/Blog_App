import type { AppProps } from 'next/app'; // Import the AppProps type
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;