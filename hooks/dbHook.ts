import { apiInstance } from "./axiosInstance";


export const dbHook = {
  duo:{
    post:function(query:any){
      console.log("훅 ! ",query)
      apiInstance.post('/duo',query)
    }
  }
}