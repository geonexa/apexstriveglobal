import '../styles/libraries.css';
import '../styles/globals.css';

import '@fontsource-variable/raleway';
import WrapContexts from '../context/wrapContexts';

function MyApp({ Component, pageProps }) {
  return (
    <>
     <WrapContexts>

      <Component {...pageProps} />
     </WrapContexts>
    </>
  )
}

export default MyApp
