import db from "./mariadb";

export const selectQuery = {
  posts:{
    listAll:async function getPostsAll(){
      const conn = await db();
      return new Promise(async (resolve,reject)=>{
        await conn?.query(`SELECT * FROM posts;`)
        .then((res:any)=>{
          console.log(res)
          resolve(res)
        })
        .catch((err:any)=>{
          console.log('프로미스 에러',err)
          reject(err)
        })
      })
    },
    listCommuName:async function getPostsAll(commuName:string){
      const conn = await db();
      return new Promise(async (resolve,reject)=>{
        await conn?.query(`SELECT * FROM posts WHERE CommunityName = '${commuName}'`)
        .then((res:any)=>{
          resolve(res)
        })
        .catch((err:any)=>{
          console.log('프로미스 에러',err)
          reject(err)
        })
      })
    },
    id:async function getPostsID(postId:number){
      const conn = await db();
      return new Promise(async (resolve,reject)=>{
        await conn?.query(`SELECT * FROM posts WHERE PostId = '${postId}';`)
        .then((res:any)=>{
          resolve(res)
        })
        .catch((err:any)=>{
          console.log('프로미스 에러',err)
          reject(err)
        })
      })
    },
  },
}