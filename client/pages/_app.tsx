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
import Head from 'next/head';
import { useSelector } from 'react-redux';
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

  if (process.env.NEXT_PUBLIC_NODE_ENV === "production") {
    console.log = function no_console() {};
    console.warn = function no_console() {};
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistore}>
              <Head>
                <title>WEWI.GG</title>
              </Head>
              {isHeader ? <HeaderIndex /> : null  }
              <Container>
                <Component {...pageProps} />
              </Container>
              <Footer />
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
