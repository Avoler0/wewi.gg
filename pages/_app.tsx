import './globals.css'
import type { AppProps } from 'next/app'
import HeaderIndex from '../component/gnb'
import { Provider } from 'react-redux';
import store from '../redux/store';
import FooterIndex from '../component/footer/footer';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  console.log("앱 쿼리",queryClient.queryCache)
  return (
    <>
    <QueryClientProvider client={queryClient}>
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
