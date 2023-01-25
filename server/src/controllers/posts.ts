import { updateQuery } from './../mariadb/updateQuery';
import { insertQuery } from "../mariadb/insertQuery";
import { selectQuery } from "../mariadb/selectQuery";
import { postErrorStateMessage } from '../mariadb/sqlError';

export function getPostList(req:any,res:any){
  const {commuName} = req.params;
  if(commuName === '전체'){
    selectQuery.posts.listAll()
    .then((_response)=>{
      return res.status(200).json(_response)
    })
    .catch((_error)=>{
      const err = postErrorStateMessage(_error);
      res.status(err.state).send(err.message);
    })
  }else{
    selectQuery.posts.listCommuName(commuName)
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
  await selectQuery.posts.id(id)
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
  await insertQuery.post(req.body)
  .then((_response)=>{
    res.status(200).send('success')
  })
  .catch((_error)=>{
    const err = postErrorStateMessage(_error);
    res.status(err.state).send(err.message);
  })
}


export async function postsGoodUpdate(req:any,res:any) {
  console.log('굿!',req.query)
  const {id} = req.query
  await updateQuery.postsGood(id)
  .then((_response)=>{
    console.log(_response)
    res.status(200).send('success')
  })
  .catch((_error)=>{
    const err = postErrorStateMessage(_error);
    res.status(err.state).send(err.message);
  })
}
export async function postsBadUpdate(req:any,res:any) {
  const {id} = req.query
  await updateQuery.postsBad(id)
  .then((_response)=>{
    console.log(_response)
    res.status(200).send('success')
  })
  .catch((_error)=>{
    const err = postErrorStateMessage(_error);
    res.status(err.state).send(err.message);
  })
}
export async function postsViewUpdate(req:any,res:any) {
  const {id} = req.query
  await updateQuery.postsView(id)
  .then((_response)=>{
    console.log(_response)
    res.status(200).send('success')
  })
  .catch((_error)=>{
    const err = postErrorStateMessage(_error);
    res.status(err.state).send(err.message);
  })
}