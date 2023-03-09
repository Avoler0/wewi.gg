import { dbInstance } from "../axiosInstance";


export async function vistantPost(ip:string){
  return await dbInstance({
    method:'post',
    url:'/visitant',
    data:{
      ip:ip
    }
  })
}