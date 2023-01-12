import db from '../mariadb/mariadb';
import { selectQuery } from '../mariadb/query';
import { deleteValueList, discernCUDTaskList, insertValueList } from '../service/menulist';


export const getMenulist = async (req:any,res:any) => {
  console.log("포스트 컨트롤러" ,req.method)
  const conn = await db();
  const users = await conn?.query(`SELECT * FROM menulist`)
  
    try{
      
      // console.log("쿼리 유저!!",users)
      // res.status(200).json(emptyMenuList);
    }catch(err){
      res.status(400).json({message:'api 조회에 실패하였습니다.'})
    }finally{
      return ;
    }
  
}

export const postMenulist = async (req:any,res:any) => {
  const body = req.body
  const conn = await db();
  const { commuName } = req.params;
  const communityID = await selectQuery.community.id(commuName);
  console.log("포스트받음",body)
  const discern = discernCUDTaskList(body)
  const addValue = await insertValueList(discern['add'],communityID)
  const deleteValue = await deleteValueList(discern['delete'],communityID)
  console.log('정렬후',deleteValue)

  return res.status(200)
  // if(result){
  //   res.status(200).json({message:'메뉴 추가에 성공하였습니다.'})
  // }else{
  //   res.status(400).json({message:'api 조회에 실패하였습니다.'})
  // }
  
}