import { riotSummoner } from './../hook/axiosInstance';

export function getSummoner(nickName:string){
  return new Promise((resolve)=>{
    riotSummoner.get(`by-name/${nickName}`,(_response:any)=>{
      setTimeout(()=>{
          resolve(_response)
        },200)
    })
  })
}