import { apiInstance, dbInstance } from "../../axiosInstance";

export type Line = "All" | "Top" | "Jungle" | "Bottom" | "Support"
export type Mode = "All" | "Normal" | "Solo" | "Team" | "Aram" | "Special"
interface matesQuery{
  seekerName: string,
  password:string,
  line: string,
  mode: string,
  mic: boolean,
  content: string,
}

export const matesHook = { // 듀오 구인 페이지 Server 통신 Hook
  get:async function(){ // 듀오 구인 리스트 Get
      return await new Promise(async (resolve,reject) => {
        await dbInstance({
          method:'get',
          url:'/mates/list',
        })
        .then((_res)=> resolve(_res))
        .catch((_err) => reject(_err))
      })
    },
  post:async function(query:matesQuery){ // 듀오 구인 Add Post
    return await new Promise(async (resolve,reject) => {
      await dbInstance({
        method:'post',
        url:'/mates/add',
        data:query
      })
      .then((_res)=> resolve(_res))
      .catch((_err) => reject(_err))
    })
  },
  delete:async function(id:number){ // 듀오 구인 게시글 삭제
    console.log("델리트")
    return await new Promise(async (resolve,reject) => {
      await dbInstance({
        method:'delete',
        url:'/mates/delete',
        data:{
          id:id
        }
      })
      .then((_res)=> resolve(_res))
      .catch((_err) => reject(_err))
    })
  }
}