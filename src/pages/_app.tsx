import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Navbar from '..//Components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar /> {/* Add the Navbar here */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;