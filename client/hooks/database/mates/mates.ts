import { apiInstance, dbInstance } from "../../axiosInstance";


export const matesHook = {
  get:async function(){
      return await new Promise(async (resolve,reject) => {
        await dbInstance({
          method:'get',
          url:'/mates/list',
        })
        .then((_res)=> resolve(_res))
        .catch((_err) => reject(_err))
      })
    },
  post:async function(query:any){
    return await new Promise(async (resolve,reject) => {
      await dbInstance({
        method:'post',
        url:'/mates/add',
        data:query
      })
      .then((_res)=> resolve(_res))
      .catch((_err) => reject(_err))
    })
  },
  delete:async function(id:number){
    console.log("델리트")
    return await apiInstance.delete('/database/duo',{data:{id:id}})
    .then((_res)=>{
      return _res;
    })
    .catch((_error)=>{
      return _error;
    })
  }
}