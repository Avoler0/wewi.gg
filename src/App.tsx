import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Clan from "./Router/Clan";
import Comunity from "./Router/Comunity";
import DuoSearch from "./Router/DuoSearch";
import Main from "./Router/Main";




function App() {
  return (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/matching" element={<DuoSearch />}/>
      <Route path="/clan" element={<Clan />}/>
      <Route path="/comunity" element={<Comunity />}/>
    </Routes>
  </BrowserRouter>);
  
}

export default App;
