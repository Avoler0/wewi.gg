import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Clan from "./Router/Clan";
import Comunity from "./Router/Comunity";
import Login from "./Router/Login";
import Main from "./Router/Main";
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
      <Route path="/" element={<Main />}/>
    </Routes>
  </BrowserRouter>);
  
}

export default App;
