import { ThemeProvider } from "styled-components";
import { BrowserRouter} from "react-router-dom";
import Header from "./Components/Header";
import Router from "./Router";
import theme from "./commons/theme";

function App() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
          <Router />
        </ThemeProvider>
        
      </BrowserRouter>
    );
  }

export default App;