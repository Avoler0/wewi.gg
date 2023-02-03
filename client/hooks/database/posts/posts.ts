import { dbInstance } from "../../axiosInstance"


export const postsHook = { // 포스트 관련 Server 통신 Hook
    get:{
      list:async function name(commuName:string) { // 전체 포스트 리스트를 받아오는 Hook
        return await dbInstance({
          method:'get',
          url:`/posts/list/${commuName}`,
        })
      },
      listById:async function name(postsId:any) { // 특정 포스트를 가져오는 Hook
        console.log('훅훅',postsId)
        return await dbInstance({
          method:'get',
          url:'/posts/content',
          params:{
            id:postsId
          }
        })
      },
    },
    update:{
      voteGood:async function name(postsId:any) { // 게시글 추천 Hook
      return await dbInstance({
        method:'post',
        url:'/posts/good',
        params:{
          id:postsId
        }
      })
      },
      voteBad:async function name(postsId:any) { // 게시글 비추천 Hook
        return await dbInstance({
          method:'post',
          url:'/posts/bad',
          params:{
            id:postsId
          }
        })
      },
      view:async function name(postsId:any) { // 게시글 조회 Hook
        return await dbInstance({
          method:'post',
          url:'/posts/view',
          params:{
            id:postsId
          }
        })
      },
    },
    delete:async function name(postsId:any) {
        return await dbInstance({
          method:'delete',
          url:`/posts/delete/${postsId}`,
        })
      },
}