import { dbInstance } from "../../axiosInstance"


export const dbPostsWrite = {
  postWrite:async function(queryData:any){
    console.log("훅에서",queryData)
    return await dbInstance({
      method:'post',
      url:'/posts/write',
      data:queryData
    })
  },
  getImage:async function(imageUrl:string){
    console.log('겟 이미지 실행',imageUrl)
    return await dbInstance({
      method:'get',
      url:`/posts/attach/images`,
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
