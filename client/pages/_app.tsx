import './globals.css'
import type { AppProps } from 'next/app'
import HeaderIndex from '../component/gnb'
import { Provider } from 'react-redux';
import store, { persistore } from '../redux/store';
import Footer from '../component/footer/footer';
import { QueryClient, QueryClientProvider } from 'react-query';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react'
import { useRouter } from 'next/router';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../const/theme'
import { useEffect } from 'react';
import axios from 'axios';
import { vistantPost } from '../hooks/server/visitant';
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
  useEffect( () => {
    axios.get('https://geolocation-db.com/json/')
    .then((res) => {
      vistantPost(res.data.IPv4)
    })
  },[])
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistore}>
              {isHeader ? <HeaderIndex /> : null  }
              <Container>
                <Component {...pageProps} />
              </Container>
              { router.pathname === '/' ? null : <Footer />}
            </PersistGate>
          </Provider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}

export default MyApp

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 12rem;
`;
