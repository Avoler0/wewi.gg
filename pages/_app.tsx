import './globals.css'
import type { AppProps } from 'next/app'
import HeaderIndex from '../component/gnb'
import { Provider } from 'react-redux';
import store from '../redux/store';
import FooterIndex from '../component/footer/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Provider store={store}>
      <HeaderIndex />
      <Component {...pageProps} />
      <FooterIndex />
    </Provider>
    </>
  )
}

export default MyApp
