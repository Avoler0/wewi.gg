import { BrowserRouter, Routes } from "react-router-dom";
import Clan from "./Pages/clan/clanMain";
import Comunity from "./Pages/community/Comunity";
import Home from "./Pages/siteHome/Home";
import Login from "./Pages/login/Login";
import Main from "./Pages/duoMatching/duoMain";
import Register from "./Pages/login/Register";

function Route() {
//  return(
//    <BrowserRouter>
//         <Routes>
//           <Route path="/clan" element={<Clan info=[...summonerInfo] />}/>
//           <Route path="/comunity" element={<Comunity />}/>
//           <Route path="/login" element={<Login />}/>
//           <Route path="/register" element={<Register />}/>
//           <Route path="/duo/:summonerId" element={<Record />}/>
//           <Route path="/duo" element={<Main />}/>
//           <Route path="/" element={<Home />}/>
//         </Routes>
//       </BrowserRouter>
//  )
 return null
}
export default Route;