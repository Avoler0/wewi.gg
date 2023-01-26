
import { postsQuery } from '../mariadb/query/posts';
import { postErrorStateMessage } from '../mariadb/sqlError';

export function getPostList(req:any,res:any){
  const {commuName} = req.params;
  if(commuName === '전체'){
    postsQuery.select.listAll()
    .then((_response)=>{
      return res.status(200).json(_response)
    })
    .catch((_error)=>{
      const err = postErrorStateMessage(_error);
      res.status(err.state).send(err.message);
    })
  }else{
    postsQuery.select.listByCommu(commuName)
    .then((_response)=>{
      // console.log('get 보냄')
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
    console.log(_response)
    res.status(200).json(_response)
  })
  .catch((_error)=>{
    const err = postErrorStateMessage(_error);
    res.status(err.state).send(err.message);
  })
}

export async function postsWriteInsert(req:any,res:any){
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
  // console.log('굿!',req.query)
  const {id} = req.query
  await postsQuery.update.voteGood(id)
  .then((_response)=>{
    console.log('굿 리스폰스',_response)
    res.status(200).send('success')
  })
  .catch((_error)=>{
    console.log('굿 오류')
    const err = postErrorStateMessage(_error);
    res.status(err.state).send(err.message);
  })
}
export async function postsBadUpdate(req:any,res:any) {
  const {id} = req.query
  await postsQuery.update.voteBad(id)
  .then((_response)=>{
    console.log('배드 리스폰스',_response)
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
    console.log(_response)
    res.status(200).send('success')
  })
  .catch((_error)=>{
    const err = postErrorStateMessage(_error);
    res.status(err.state).send(err.message);
  })
}