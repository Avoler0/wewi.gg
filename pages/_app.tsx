import './globals.css'
import type { AppProps } from 'next/app'
import HeaderIndex from '../component/gnb'
import { Provider } from 'react-redux';
import store from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Provider store={store}>
      <HeaderIndex />
      <Component {...pageProps} />
    </Provider>
    </>
  )
}

export default MyApp
