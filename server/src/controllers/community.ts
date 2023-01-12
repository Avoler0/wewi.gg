import db from '../mariadb/mariadb';


export const getCommunity = async (req:any,res:any) => {
  const conn = await db();
  try{
    const result = await conn?.query(`SELECT * FROM communities`)

    return res.status(200).json(result[0]);
  }catch(err){
    return res.status(400)
  }
}

export const addCommunity = async (req:any,res:any) => {
  console.log("포스트 받음",req.params,req.body)
  const { communityName } = req.body;
  const conn = await db();
  try{
    const result = await conn?.query(`INSERT INTO communities(CommunityName) VALUE(?)`,[communityName]);
    console.log("리설트",result)
    return res.status(200).json(result)
  }catch(err){
    console.log("에러남",err)
    return res.status(400).json(err)
  }
  
}