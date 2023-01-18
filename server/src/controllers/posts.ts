


export const postsController = {
  getList:async (req:any,res:any) => {
    try{

    }catch{

    }finally{
      return res.status(200).send({message:'하이'})
    }
  },
  getPosts:async (req:any,res:any) => {

  },
  post:async (req:any,res:any) => {
    console.log(req.body)
    const {community,title,content,userName} = req.body;
    console.log("이미지 파일스",req.files)
    const timeStamp = Date.now();
    // for(let i = 0; i < files.length; i++){
    //   console.log("이미지 파일스",files[i])
    // }
    return res.status(200).send({message:'하이'})
    // try{

    // }catch{

    // }finally{
    //   return res.status(200).send({message:'하이'})
    // }

    
  }
}
