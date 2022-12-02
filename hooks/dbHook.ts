import { useDispatch } from 'react-redux';
import { apiInstance, dbInstance } from "./axiosInstance";

interface LoginQuery {
  email:string,
  password:string
}
interface RegisterQuery extends LoginQuery{
  nickName:string
}

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
  },
  account:{
    login:async function(query:LoginQuery){
      console.log(query)
      return await apiInstance.post('/database/account/login',query)
      .then((_res)=>{
        return _res.data
      })
      .catch((_error)=>{
        return _error.response.data
      })
    },
    register:async function(query:RegisterQuery){
      return await apiInstance.post('/database/account/register',query)
      .then((_res)=>{
        console.log("Register Res",_res)
        return _res.data
      })
      .catch((_error)=>{
        console.log("Register Err",_error)
        return _error.response.data
      })
    },
    naver:{
      join:async function(token:string){
        const result = await apiInstance.post(`/database/account/naver/${token}`)
        console.log("딥훅",result)
      },
      login:async function(query:LoginQuery){
        return await apiInstance.post('/database/account/naver/login',query)
        .then((_res)=>{
          return _res.data
        })
        .catch((_error)=>{
          return _error.response.data
        })
      },
      register:async function(query:RegisterQuery){
        return await apiInstance.post('/database/account/naver/register',query)
        .then((_res)=>{
          console.log("Register Res",_res)
          return _res.data
        })
        .catch((_error)=>{
          console.log("Register Err",_error)
          return _error.response.data
        })
      },
    }
  }
}