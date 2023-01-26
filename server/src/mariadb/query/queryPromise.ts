import db from "../mariadb";

export async function queryPromise(query:string){
  const conn = await db();
  return new Promise(async (resolve,reject)=> {
    return await conn?.query(`${query}`)
    .then((_res)=> resolve(_res))
    .catch((_err)=> reject(_err))
  })
}