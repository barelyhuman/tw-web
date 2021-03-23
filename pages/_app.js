import '../styles/globals.css';
import '../styles/extras.css';
import feather from 'feather-icons';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    feather.replace();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
