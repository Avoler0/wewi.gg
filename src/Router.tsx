import { Route, Routes } from "react-router-dom";
import Clan from "./Pages/ClanPage";
import Comunity from "./Pages/CommunityPage";
import MainPage from "./Pages/MainPage";
import Login from "./Components/Account/Login/Login";
import Duo from "./Pages/DuoPage";
import Register from "./Components/Account/Register/Register";
import SummonerRecord from "./Components/SummonerInfo";


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
      <Route path="/duo" element={<Duo />}>
        <Route path="/duo/addDuo" element={<Duo />}/>
      </Route>
      <Route path="/" element={<MainPage/>}/>
    </Routes>
  </>
  )
}
export default Router;