import './globals.css'
import type { AppProps } from 'next/app'
import HeaderIndex from '../component/gnb'
import { Provider } from 'react-redux';
import store from '../redux/store';
import FooterIndex from '../component/footer/footer';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  
  
  return (
    <>
      <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={true} />  */}
        <Provider store={store}>
          <HeaderIndex />
          <Component {...pageProps} />
          <FooterIndex />
        </Provider>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
