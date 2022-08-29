import React from 'react'
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import theme from "./commons/theme";
import store from "./Redux/store"
import { Provider } from "react-redux";
import Layout from './Pages/Layout/Layout';
// import user, { getLoginState } from "./commons/loginState";


window.React = React

function App() {
  console.log("로그인");
  
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Provider store={store} >
            <Layout />
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
    );
  }

export default App;