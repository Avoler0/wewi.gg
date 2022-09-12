import { riotSummoner } from './../hook/axiosInstance';

export function getSummoner(nickName:string) {
  return riotSummoner.get(`by-name/${nickName}`)
}