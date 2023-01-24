import { selectQuery } from './../mariadb/query';
import { MariaDBErrorType } from './../mariadb/mariadDbType';
import { insertQuery } from "../mariadb/query";
import { postErrorStateMessage } from "../mariadb/sqlError";
import { filesArrange, postValue } from "../service/valueDataArrange";
import fs from 'fs'


export const postsController = {
  getList:async (req:any,res:any) => {
    // console.log('겟 리스트',req.body,req.params)
    const {commuName} = req.params;
    if(commuName === '전체'){
      selectQuery.posts.listAll()
      .then((_response)=>{
        // console.log('get 보냄',_response)
        return res.status(200).json(_response)
      })
      .catch((error)=>{
        console.log(error)
      })
    }else{
      selectQuery.posts.listCommuName(commuName)
      .then((_response)=>{
        // console.log('get 보냄')
        return res.status(200).json(_response)
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  },
  getPostThumbnail:async(req:any,res:any) => {
    const {src} = req.query
    console.log(src)
    fs.readFile(src, (err:any,data:any) => {
      console.log('fs 썸네일쓰쓰쓰',err,data)
      res.writeHead(200);
      res.write(data);
      res.end();
    })
  },
  getPosts:async (req:any,res:any) => {

  },
  post:async (req:any,res:any) => {
  
    // console.log(req.body,req.query)
    await insertQuery.post(req.body)
    // .then((_response:any)=>{
    //   const savePostId = parseInt(_response.insertId)
    //   console.log('전송 완료',_response)
    // }).catch((err:any)=>{
    //   const errResult = postErrorStateMessage(err)
    //   return res.status(errResult.state).send(errResult.message)
    // })
  }
}