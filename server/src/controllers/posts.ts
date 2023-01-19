import { MariaDBErrorType } from './../mariadb/mariadDbType';
import { insertQuery } from "../mariadb/query";
import { postErrorStateMessage } from "../mariadb/sqlError";
import { postValue } from "../service/valueDataArrange";



export const postsController = {
  getList:async (req:any,res:any) => {
    try{

    }catch{

    }finally{
      return res.status(200).send({message:'하이'})
    }
  },
  getListAll:async (req:any,res:any) => {
    try{

    }catch{

    }finally{
      return res.status(200).send({message:'하이'})
    }
  },
  getPosts:async (req:any,res:any) => {

  },
  post:async (req:any,res:any) => {
    const filesPath:Array<string> = [];
    for(let i = 0; i < req.files.length; i++){
      console.log(req.files[i].path)
      filesPath.push(req.files[i].path)
    }

    return await insertQuery.post(req.body)
    .then((_response:any)=>{
      const savePostId = parseInt(_response.insertId)
      insertQuery.postImage(savePostId,filesPath.join())
      .then((_response)=>{
        return res.status(200).send('success request')
      })
      .catch((err)=>{
        const errResult = postErrorStateMessage(err)
        return res.status(errResult.state).send(errResult.message)
      })
    })
    .catch((err)=>{
      const errResult = postErrorStateMessage(err)
      return res.status(errResult.state).send(errResult.message)
    })
  }
}