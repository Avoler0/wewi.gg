import React from 'react'
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Router from "./Router";
import theme from "./commons/theme";
import { Provider } from "react-redux";
import user, { getLoginState } from "./commons/loginState";

window.React = React

function App() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Provider store={user} >
            <Header />
            <Router />
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
    );
  }

export default App;