import { axios } from 'axios';

const server = "http://localhost:4000/"

export const db = {
  duo:{
    post:function(query:any){
      console.log("훅 ! ",query)
      axios.post('api/duo',query)
    }
  }
}