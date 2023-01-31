import { dbInstance } from "../../axiosInstance"


export const postsWriteHook = {
  get:{
    image:async function(imageUrl:string){
      console.log('겟 이미지 실행',imageUrl)
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
      console.log("훅에서",queryData)
      return await dbInstance({
        method:'post',
        url:'/posts/write',
        data:queryData
      })
    },
    image:async function(image:FormData){
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
