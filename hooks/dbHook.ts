import { useDispatch } from 'react-redux';
import { apiInstance } from "./axiosInstance";


export const dbHook = {
  duo:{
    get:async function(){
      return await apiInstance.get('/database/duo')
      .then((_res)=>{
        return _res.data;
      })
      .catch((_error)=>{
        return _error;
      })
    },
    post:async function(query:any){
      return await apiInstance.post('/database/duo',query)
      .then((_res)=>{
        return _res;
      })
      .catch((_error)=>{
        return {status:_error.response.status}
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
}