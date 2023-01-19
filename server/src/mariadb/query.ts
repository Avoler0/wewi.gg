import { postValue } from "../service/valueDataArrange";
import {postErrorState, postErrorStateMessage} from './sqlError'
import db from "./mariadb";
import { MariaDBErrorType } from "./mariadDbType";

export const selectQuery = {
  posts:{
    all:async function getPostsAll(){
      const conn = await db();
      return await conn?.query(`SELECT * FROM posts`)
    },
    categoryName:async function getPostsAll(categoryName:string){
      const conn = await db();
      return await conn?.query(`SELECT * FROM posts WHERE CommunityName = '${categoryName}'`)
    },
    id:async function getPostsID(postId:number){
      const conn = await db();
      const readTable = await conn?.query(`SELECT * FROM posts WHERE PostId = '${postId}';`)
      return readTable[0]['CommunityID'];
    },
  },
}

export const insertQuery = {
  post:async function (objectData:any,imagesPath:string){
    const conn = await db();
    const values = postValue(objectData)
    const result = await conn?.query(`INSERT INTO posts(PostTitle,Content,CommunityName,UserName,CreateAt) VALUES(${values});`)
    .then(async (res)=>{
      const savePostId = parseInt(res.insertId)
      console.log("쿼리 후",res,typeof res.insertId, parseInt(res.insertId));
      return await conn?.query(`INSERT INTO posts_images(PostId,ImagesPath) VALUES(${savePostId},'${imagesPath}');`)
    })
    .catch((err:MariaDBErrorType)=>{
      return postErrorStateMessage(err)
    })
    return result;
  },
}

export const deleteQuery = {
  menulist:async function(communityID:number,categoryID:number,values:string) {
    const conn = await db();
    const result = await conn?.query(`DELETE FROM posts WHERE CommunityID = ${communityID} AND MenuCategoryID = ${categoryID}  AND MenuName IN (${values})`)
    console.log("딜리트 리설트",values,result)
    return result
  }
}