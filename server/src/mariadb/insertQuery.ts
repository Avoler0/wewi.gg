import db from "./mariadb";



export const insertQuery = {
  post:async function (objectData:any){
    const conn = await db();
    const {title,content,community,userName,thumbnail} = objectData;
    const values = `'${title}','${content}','${community}','${userName}','${thumbnail}',current_timestamp`

    return new Promise(async (resolve,reject)=>{
      await conn?.query(`INSERT INTO posts(PostTitle,Content,CommunityName,UserName,Thumbnail,CreateAt) VALUES(${values});`)
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