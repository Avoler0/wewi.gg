import axios from 'axios';
import { useDispatch } from 'react-redux';
import { apiInstance, dbInstance } from "./axiosInstance";

interface LoginQuery {
  email:string,
  password:string
}
interface RegisterQuery extends LoginQuery{
  nickName:string
}

interface OauthLoginQuery {
  type:string
  key: string,
  email: string
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
      console.log("디비훅 가입",query)
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
    oauth:{
      callNaverProfile:async function(token:string){
        return await apiInstance.post(`/database/account/oauth/${token}`)
      },
      login:async function(query:OauthLoginQuery){
        return await apiInstance.post('/database/account/oauth/login',query)
        .then((_res)=>{
          return _res.data
        })
        .catch((_error)=>{
          return _error.response.data
        })
      },
      register:async function(query:RegisterQuery){
        return await apiInstance.post('/database/account/oauth/register',query)
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
  },
  posts:{
    getList:async function name(commuName:string) {
      return await dbInstance({
        method:'get',
        url:`/posts/${commuName}`,
      })
    },
    getThumbnail:async function name(thumbnailPath:string) {
      return await dbInstance({
        method:'get',
        url:`/posts/images`,
        params:{
          src:thumbnailPath
        }
      })
    },
    getPost:async function name(commuName:string,postsId:number) {
      return await dbInstance({
        method:'get',
        url:`/posts/${commuName}/${postsId}`,
      })
    },
  },
  write:{
    post:async function(formData:FormData){
      console.log("훅에서",formData.get('title'))
      return await dbInstance({
        method:'post',
        url:'/write',
        headers: {
          "Content-Type": "multipart/form-data"
        },
        data:formData
      })
    },
    getImage:async function(imageUrl:string){
      console.log('겟 이미지 실행',imageUrl)
      return await dbInstance({
        method:'get',
        url:`/posts/wewigg/images`,
        params:{
          src:imageUrl
        }
      })
    },
    postImage:async function(image:FormData){
      console.log("훅에서 empty 이미지",image.get('title'))
      return await dbInstance({
        method:'post',
        url:'/posts/images',
        headers: {
          "Content-Type": "multipart/form-data"
        },
        data:image
      })
    },
  }
}