import db from '../mariadb/mariadb';


export const getMenulist = async (req:any,res:any) => {
  console.log("포스트 컨트롤러" ,req.method)
  const conn = await db();
  const users = await conn?.query(`SELECT * FROM menulist`)
  const emptyMenuList = [
    {
      "name":"직업 게시판",
      "list":[
        { "name":"전사", "number":11 },
        { "name":"마법사", "number":12},
        { "name":"궁수", "number":13 },
        { "name":"도적", "number":14 }
      ]
    },
    {
      "name":"정보 게시판",
      "list":[
        { "name":"게임 뉴스", "number":0 },
        { "name":"게임 업데이트", "number":1 },
        { "name":"팁 게시판", "number":2 },
        { "name":"가이드 게시판", "number":3 }
      ]
    },
    {
      "name":"커뮤니티 게시판",
      "list":[
        { "name":"자유 게시판", "number":4 },
        { "name":"질문 게시판", "number":5 },
        { "name":"구인 게시판", "number":6 },
        { "name":"길드 게시판", "number":7 }
      ]
    },
    {
      "name":"이슈 게시판",
      "list":[
        { "name":"사건사고 게시판", "number":8 },
        { "name":"토론 게시판", "number":9 },
        { "name":"버그 게시판", "number":10 }
      ]
    }
  ]
    try{
      
      // console.log("쿼리 유저!!",users)
      res.status(200).json(emptyMenuList);
    }catch(err){
      res.status(400).json({message:'api 조회에 실패하였습니다.'})
    }finally{
      return ;
    }
  
}

export const postMenulist = async (req:any,res:any) => {
  console.log("포스트 받음",req.params,req.body)
  const { communityID, categoryName } = req.body
  const conn = await db();

  try{
    await conn?.query(`INSERT INTO menucategory(CommunityID,MenuCategoryName) VALUES(?,?)`,[communityID, categoryName])
    const result =  await conn?.query('SELECT * FROM menucategory')

    return res.status(200).json(result)
  }catch(err){
    console.log("에러남",err)
    return res.status(400).json(err)
  }
  
}