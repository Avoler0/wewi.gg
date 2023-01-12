


export const postsController = async (req:any,res:any) => {
  console.log("포스트 컨트롤러" ,req.params)
  try{
    const emptyPosts = [
      {
        "id":0,
        "title":"제목없음",
        "content": "내용없음",
        "user": "닉네임 없음",
        "date": "12-21",
        "view": "730",
        "reco": "20"
      }
    ]

    res.status(200).json(emptyPosts);
  }catch(err){
    
    res.status(400).json({message:'api 조회에 실패하였습니다.'})
  }finally{
    return ;
  }
}