import { useEffect, useState } from "react";
import { BrowserRouter} from "react-router-dom";
import Header from "./Components/Header";
import Router from "./Router";

function App() {
    return (
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    );
  }

export default App;