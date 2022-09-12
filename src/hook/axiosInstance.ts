import axios from 'axios';
import { API_KEY } from '../const/API_KEY';
import { HttpRequest } from "./httpRequest"

const BASE_URL = 'http://localhost:4000/';
const RIOT_KR = 'https://kr.api.riotgames.com'
const SUMMONER_URL = '/lol/summoner/v4/summoners';
export const axiosCreate = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});
export const axiosRiotSummoner = axios.create({
  baseURL: RIOT_KR+SUMMONER_URL,
  headers: {
    'Content-type': 'application/json',
  },
  params:{
    api_key : API_KEY
  }
});
export const db = new HttpRequest(axiosCreate);
export const riotSummoner = new HttpRequest(axiosRiotSummoner);