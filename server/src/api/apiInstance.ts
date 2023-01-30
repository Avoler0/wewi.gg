import axios from "axios";
import '../../dotenv'
import { RIOT_API_KEY } from '../../dotenv';

const riotDragonApi = axios.create({
  baseURL:'http://ddragon.leagueoflegends.com/cdn'
})

const riotApi = axios.create({
  headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Whale/3.18.154.13 Safari/537.36",
    "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "https://developer.riotgames.com",
    "X-Riot-Token": RIOT_API_KEY,
  },
  timeout:1000
})

export {riotDragonApi,riotApi};