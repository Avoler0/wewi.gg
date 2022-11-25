import './globals.css'
import type { AppProps } from 'next/app'
import HeaderIndex from '../component/gnb'
import { Provider } from 'react-redux';
import store from '../redux/store';
import FooterIndex from '../component/footer/footer';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";
import { useRouter } from 'next/router';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const login = router.pathname === '/login';
  const register = router.pathname === '/register'
  return (
    <>
      <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={true} />  */}
        <Provider store={store}>
          {login ? null : <HeaderIndex /> }
          <Component {...pageProps} />
          <FooterIndex />
        </Provider>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
