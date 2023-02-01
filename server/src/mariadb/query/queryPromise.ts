import db from "../mariadb";

export async function queryPromise(query:string){
  const conn = await db();
  const result = new Promise(async (resolve,reject)=> {
    return await conn?.query(`${query}`)
    .then((_res:any)=> resolve(_res))
    .catch((_err:any)=> reject(_err))
  })

  conn.release()
  return result;
}