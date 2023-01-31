import { dbInstance } from "../../axiosInstance"


export const postsHook = {
    get:{
      list:async function name(commuName:string) {
        return await dbInstance({
          method:'get',
          url:`/posts/list/${commuName}`,
        })
      },
      listById:async function name(postsId:any) {
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
      voteGood:async function name(postsId:any) {
      return await dbInstance({
        method:'post',
        url:'/posts/good',
        params:{
          id:postsId
        }
      })
      },
      voteBad:async function name(postsId:any) {
        return await dbInstance({
          method:'post',
          url:'/posts/bad',
          params:{
            id:postsId
          }
        })
      },
      view:async function name(postsId:any) {
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