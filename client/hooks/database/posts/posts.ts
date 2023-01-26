import { dbInstance } from "../../axiosInstance"


export const dbPosts = {
    get:{
      postsList:async function name(commuName:string) {
        return await dbInstance({
          method:'get',
          url:`/posts/list/${commuName}`,
        })
      },
      postsById:async function name(postsId:any) {
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
    post:{
      postsVoteGood:async function name(postsId:any) {
      return await dbInstance({
        method:'post',
        url:'/posts/good',
        params:{
          id:postsId
        }
      })
      },
      postsVoteBad:async function name(postsId:any) {
        return await dbInstance({
          method:'post',
          url:'/posts/bad',
          params:{
            id:postsId
          }
        })
      },
      postsView:async function name(postsId:any) {
        return await dbInstance({
          method:'post',
          url:'/posts/view',
          params:{
            id:postsId
          }
        })
      },
    }
    
}