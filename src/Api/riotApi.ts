import { riotSummoner } from './../hook/axiosInstance';

export async function getSummoner(nickName:string) {
  return await riotSummoner.get(`by-name/${nickName}`)
}