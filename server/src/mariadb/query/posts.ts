import { queryPromise } from "./queryPromise"


export const postsQuery = {
  select:{
    listAll:async function(){
      return await queryPromise(`SELECT * FROM posts;`)
    },
    listByCommu:async function(commuName:string){
      return await queryPromise(`SELECT * FROM posts WHERE CommunityName = '${commuName}'`)
    },
    postsById:async function(postId:number){
      return await queryPromise(`SELECT * FROM posts WHERE PostId = '${postId}';`)
    },
  },

  insert:{
    posts:async function (objectData:any){
      const {title,content,community,userName,thumbnail} = objectData;
      const values = `'${title}','${content}','${community}','${userName}','${thumbnail}',current_timestamp`
      return await queryPromise(`INSERT INTO posts(PostTitle,Content,CommunityName,UserName,Thumbnail,CreateAt) VALUES(${values});`)
    },
    image: async function (savePostId:number){
      return await queryPromise(`INSERT INTO posts_images(PostId,ImagesPath) VALUES(${savePostId});`)
    }
  },
  
  update:{
    view:async function(postId:number){
      return await queryPromise(`UPDATE posts SET View = View + 1 WHERE PostId = ${postId};`)
    },
    voteGood:async function(postId:number){
      return await queryPromise(`UPDATE posts1 SET Good = Good + 1 WHERE PostId = ${postId};`)
    },
    voteBad:async function(postId:number){
      return await queryPromise(`UPDATE posts1 SET Bad = Bad + 1 WHERE PostId = ${postId};`)
    },
  }
}