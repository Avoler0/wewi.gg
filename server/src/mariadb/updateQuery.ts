import db from "./mariadb";


export const updateQuery = {
  postsView:async function getPostsID(postId:number){
    const conn = await db();
    return new Promise(async (resolve,reject)=>{
      await conn?.query(`UPDATE posts SET View = View + 1 WHERE PostId = ${postId};`)
      .then((res:any)=>{
        resolve(res)
      })
      .catch((err:any)=>{
        console.log('프로미스 에러',err)
        reject(err)
      })
    })
  },
  postsGood:async function getPostsID(postId:number){
    const conn = await db();
    return new Promise(async (resolve,reject)=>{
      await conn?.query(`UPDATE posts SET Good = Good + 1 WHERE PostId = ${postId};`)
      .then((res:any)=>{
        resolve(res)
      })
      .catch((err:any)=>{
        console.log('프로미스 에러',err)
        reject(err)
      })
    })
  },
  postsBad:async function getPostsID(postId:number){
    const conn = await db();
    return new Promise(async (resolve,reject)=>{
      await conn?.query(`UPDATE posts SET Bad = Bad + 1 WHERE PostId = ${postId};`)
      .then((res:any)=>{
        resolve(res)
      })
      .catch((err:any)=>{
        console.log('프로미스 에러',err)
        reject(err)
      })
    })
  },
}