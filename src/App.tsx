import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Clan from "./Router/Clan";
import Comunity from "./Router/Comunity";
import Home from "./Router/Home";
import Login from "./Router/Login";
import Main from "./Router/Main";
import Record from "./Router/Record";
import Register from "./Router/Register";




function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/clan" element={<Clan />}/>
          <Route path="/comunity" element={<Comunity />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/duo/:summonerId" element={<Record />}/>
          <Route path="/duo" element={<Main />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
  );
  
}

export default App;