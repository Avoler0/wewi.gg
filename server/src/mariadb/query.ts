import { postValue } from "../service/valueDataArrange";
import {postErrorState, postErrorStateMessage} from './sqlError'
import db from "./mariadb";
import { MariaDBErrorType } from "./mariadDbType";

export const selectQuery = {
  posts:{
    listAll:async function getPostsAll(){
      const conn = await db();
      return new Promise(async (resolve,reject)=>{
        await conn?.query(`SELECT * FROM posts t1 LEFT JOIN posts_vote t2 ON t1.PostId = t2.PostId;`)
        .then((res)=>{
          resolve(res)
        })
        .catch((err)=>{
          console.log('프로미스 에러',err)
          reject(err)
        })
      })
    },
    listCommuName:async function getPostsAll(commuName:string){
      const conn = await db();
      return new Promise(async (resolve,reject)=>{
        await conn?.query(`SELECT * FROM posts WHERE CommunityName = '${commuName}'`)
        .then((res)=>{
          resolve(res)
        })
        .catch((err)=>{
          console.log('프로미스 에러',err)
          reject(err)
        })
      })
    },
    id:async function getPostsID(postId:number){
      const conn = await db();
      const readTable = await conn?.query(`SELECT * FROM posts WHERE PostId = '${postId}';`)
      return readTable[0]['CommunityID'];
    },
  },
}

export const insertQuery = {
  post:async function (objectData:any){
    const conn = await db();
    const {title,content,community,userName} = objectData;
    const values = `'${title}','${content}','${community}','${userName}',current_timestamp`

    return new Promise(async (resolve,reject)=>{
      await conn?.query(`INSERT INTO posts(PostTitle,Content,CommunityName,UserName,CreateAt) VALUES(${values});`)
      .then((res)=>{
        console.log('프로미스 레스',res)
        resolve(res)
      })
      .catch((err)=>{
        console.log('프로미스 에러',err)
        reject(err)
      })
    })
  },
  postImage: async function (savePostId:number){
    const conn = await db();
    return new Promise(async (resolve,reject)=>{
      await conn?.query(`INSERT INTO posts_images(PostId,ImagesPath) VALUES(${savePostId});`)
      .then((res)=>{
        console.log('프로미스 이미지 레스',res)
        resolve(res)
      })
      .catch((err)=>{
        console.log('프로미스 이미지 에러',err)
        reject(err)
      })
    })
  },
  postVote: async function (savePostId:number){
    const conn = await db();
    return new Promise(async (resolve,reject)=>{
      await conn?.query(`INSERT INTO posts_vote(PostId,Good,Bad) VALUES(${savePostId},0,0);`)
      .then((res)=>{
        console.log('프로미스 보트 레스',res)
        resolve(res)
      })
      .catch((err)=>{
        console.log('프로미스 보트 에러',err)
        reject(err)
      })
    })
  }
}

export const deleteQuery = {
  menulist:async function(communityID:number,categoryID:number,values:string) {
    const conn = await db();
    const result = await conn?.query(`DELETE FROM posts WHERE CommunityID = ${communityID} AND MenuCategoryID = ${categoryID}  AND MenuName IN (${values})`)
    console.log("딜리트 리설트",values,result)
    return result
  }
}