import axios from 'axios'

const serverURL = 'http://localhost:3000/api'
const dbURL = process.env.NEXT_PUBLIC_SERVER_API_URL 
const API_KEY = process.env.EXT_PUBLICK_RIOT_API_KEY

const apiInstance = axios.create({
  baseURL: serverURL,
  headers: {'X-Custom-Header': 'foobar'},
});

const dbInstance = axios.create({
  baseURL: dbURL
});

const naverInstance = axios.create({
  headers:{
    'Content-Type': 'application/json',
    'X-Naver-Client-Id': 'NR61LLLoBLU2vcfbHvDY',
    'X-Naver-Client-Secret': 'Fx5Nr8FL4W'
  }
});
const riotApi = axios.create({
  headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.5249.114 Whale/3.17.145.12 Safari/537.36",
    "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "https://developer.riotgames.com",
    "X-Riot-Token": "RGAPI-92b4d59d-ab59-4cd0-bf77-cc23a29d960f",
  },
  timeout:1000
})

export {apiInstance,dbInstance , riotApi,naverInstance};