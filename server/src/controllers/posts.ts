import { insertQuery } from "../mariadb/query";
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
    const filesPath = [];
    for(let i = 0; i < req.files.length; i++){
      console.log(req.files[i].path)
      filesPath.push(req.files[i].path)
    }
    const result = await insertQuery.post(req.body,filesPath.join())

    return res.status(result.state).send({message:result.message})
    
  }
}
