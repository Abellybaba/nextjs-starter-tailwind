import '../styles/globals.css'
import { useEffect } from 'react';


export default function App({ Component, pageProps }) {
  const use = async () => {
    (await import('tw-elements')).default;
  };

  useEffect(() => {
    use();
  }, [])
  
  return <Component {...pageProps} />
}
