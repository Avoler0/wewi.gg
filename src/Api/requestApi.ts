import React, { useState } from 'react';
import { db } from "../hook/axiosInstance";



// useState넘기는거 말고 그냥 넘기는 방법 찾기
export default function RequestApi(){

  async function loginPost(email:string,password:string){
     return await new Promise ( (resolve) => {
       db.get(`account?email_like=${email}&password_like=${password}`, (response:any) => {
          setTimeout(()=>{
            resolve(response)
          },1000)
        }
      )
    })
  }

  return {loginPost}
}