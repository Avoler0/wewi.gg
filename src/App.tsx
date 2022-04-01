import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Clan from "./Pages/clan/Clan";
import Comunity from "./Pages/community/Comunity";
import Home from "./Pages/siteHome/Home";
import Login from "./Pages/login/Login";
import Main from "./Pages/duoMatching/Main";
import Record from "./Pages/summonSearch/Record";
import Register from "./Pages/login/Register";
import {getSummonerBasicData, getSummonerInfo, getSummonerRecordList} from "./api/api"
import { useEffect, useState } from "react";
import { customAsync } from "./commons/asyncUtils";
import SummonerRecord from "./Pages/summonSearch";

interface I_summonerBasicData {
  accountId: string,
  id: string,
  name: string,
  profileIconId: number,
  puuid: string,
  revisionDate: number,
  summonerLevel: number,
}
interface I_summonerInfo {
  [0]:{
    freshBlood: boolean,
    hotStreak: boolean,
    inactive: boolean,
    leagueId: string,
    leaguePoints: number,
    losses: number,
    queueType: string,
    rank: string,
    summonerId: string,
    summonerName: string,
    tier: string,
    veteran: boolean,
    wins: number,
  },
  [1]:{
    freshBlood: boolean,
    hotStreak: boolean,
    inactive: boolean,
    leagueId: string,
    leaguePoints: number,
    losses: number,
    queueType: string,
    rank: string,
    summonerId: string,
    summonerName: string,
    tier: string,
    veteran: boolean,
    wins: number,
  }
}
function App() {
  
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/clan" element={<Clan  />}/>
          <Route path="/comunity" element={<Comunity />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/duo/:summonerId" element={<SummonerRecord />}/>
          <Route path="/duo" element={<Main />}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
  );
  
}

export default App;