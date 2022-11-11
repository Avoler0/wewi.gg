import { useDispatch } from 'react-redux';
import { apiInstance } from "./axiosInstance";


export const dbHook = {
  duo:{
    get:async function(){
      return await apiInstance.get('/duo')
      .then((_res)=>{
        console.log("레쓰비get",_res)
        return _res.data;
      })
      .catch((_error)=>{
        return _error;
      })
    },
    post:async function(query:any){
      console.log("post",query)
      return await apiInstance.post('/duo',query)
      .then((_res)=>{
        console.log("레쓰비post",_res.data)
        return _res;
      })
      .catch((_error)=>{
        console.log("레쓰비post error",_error)
        return {status:_error.response.status}
      })
    },
    delete:async function(id:string){
      return await apiInstance.delete('/duo',id)
      .then((_res)=>{
        return _res;
      })
      .catch((_error)=>{
        return _error;
      })
    }
  }
}