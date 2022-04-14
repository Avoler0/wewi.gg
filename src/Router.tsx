import { Route, Routes, useMatch } from "react-router-dom";
import Header from "./Components/Header";
import Clan from "./Pages/clan/clanMain";
import Comunity from "./Pages/community/Comunity";
import Home from "./Pages/siteHome/Home";
import Login from "./Pages/login/Login";
import Main from "./Pages/duoMatching/duoMain";
import Register from "./Pages/login/Register";
import SummonerRecord from "./Pages/summonSearch";


function Router() {

  return (
  <>
    <Routes>
      <Route path="/clan" element={<Clan  />}/>
      <Route path="/clan/addClan" element={<Clan  />}/>
      <Route path="/comunity" element={<Comunity />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/duo/:summonerId" element={<SummonerRecord />}/>
      <Route path="/duo/addDuo" element={<Main />}/>
      <Route path="/duo" element={<Main />} />
      <Route path="/" element={<Home/>}/>
    </Routes>
  </>
  )
}
export default Router;