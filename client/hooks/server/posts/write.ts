import { dbInstance } from "../../axiosInstance"


export const postsWriteHook = {
  get:{
    image:async function(imageUrl:string){
      return await dbInstance({
        method:'get',
        url:`/posts/attach/images`,
        params:{
          src:imageUrl
        }
      })
    },
  },
  post:{
    write:async function(queryData:any){
      return await dbInstance({
        method:'post',
        url:'/posts/write',
        data:queryData
      })
    },
    image:async function(image:FormData){
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
