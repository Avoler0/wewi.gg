import './globals.css'
import type { AppProps } from 'next/app'
import HeaderIndex from '../component/gnb'
import { Provider } from 'react-redux';
import store, { persistore } from '../redux/store';
import FooterIndex from '../component/footer/footer';
import { QueryClient, QueryClientProvider } from 'react-query';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react'
import { useRouter } from 'next/router';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHeader = pathValid(router.pathname);

  function pathValid(path:string){
    switch(path){
      case '/login':
        return false
      case '/register':
        return false
      case '/oauth/callback':
        return false
      default:
        return true
    }
  }
  
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistore}>
            {isHeader ? <HeaderIndex /> : null  }
            <Component {...pageProps} />
            <FooterIndex />
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
