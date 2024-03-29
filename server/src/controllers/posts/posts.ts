
import { postsQuery } from '../../mariadb/query/posts';
import { postErrorStateMessage } from '../../mariadb/sqlError';

export async function getPostList(req:any,res:any){
  const {commuName} = req.params;
  if(commuName === '전체'){
    await postsQuery.select.listAll()
    .then((_response)=>{
      return res.status(200).json(_response)
    })
    .catch((_error)=>{
      const err = postErrorStateMessage(_error);
      res.status(err.state).send(err.message);
    })
  }else{
    await postsQuery.select.listByCommu(commuName)
    .then((_response)=>{
      return res.status(200).json(_response)
    })
    .catch((_error)=>{
      const err = postErrorStateMessage(_error);
      res.status(err.state).send(err.message);
    })
  }
}
export async function getPostWritingData(req:any,res:any){
  const {id} = req.query;
  await postsQuery.select.postsById(id)
  .then((_response)=>{

    res.status(200).json({message: '성공적으로 게시 되었습니다.'})
  })
  .catch((_error)=>{
    const err = postErrorStateMessage(_error);
    res.status(err.state).send(err.message);
  })
}

export async function postsWriteInsert(req:any,res:any){
  console.log(req.body)
  await postsQuery.insert.posts(req.body)
  .then((_response)=>{
    res.status(200).send('success')
  })
  .catch((_error)=>{
    const err = postErrorStateMessage(_error);
    res.status(err.state).send(err.message);
  })
}


export async function postsGoodUpdate(req:any,res:any) {
  const {id} = req.query
  await postsQuery.update.voteGood(id)
  .then((_response)=>{
    res.status(200).send('success')
  })
  .catch((_error)=>{
    const err = postErrorStateMessage(_error);
    res.status(err.state).send(err.message);
  })
}
export async function postsBadUpdate(req:any,res:any) {
  const {id} = req.query
  await postsQuery.update.voteBad(id)
  .then((_response)=>{
    res.status(200).send('success')
  })
  .catch((_error)=>{
    const err = postErrorStateMessage(_error);
    res.status(err.state).send(err.message);
  })
}
export async function postsViewUpdate(req:any,res:any) {
  const {id} = req.query
  await postsQuery.update.view(id)
  .then((_response)=>{
    res.status(200).send('success')
  })
  .catch((_error)=>{
    const err = postErrorStateMessage(_error);
    res.status(err.state).send(err.message);
  })
}

export async function postsDelete(req:any,res:any) {
  const {postsId} = req.params;
  try{
    await postsQuery.delete.posts(postsId)
    res.status(200)
  }catch(_error:any){
    const err = postErrorStateMessage(_error);
    res.status(err.state).send(err.message);
  }
}