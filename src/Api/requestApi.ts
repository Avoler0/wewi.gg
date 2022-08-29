import React, { useState } from 'react';
import { db } from "../hook/axiosInstance";




export default function RequestApi(){
  const [loginState,setLoginState] = useState<any>(false);

  async function loginPost(email:string,password:string){
     await new Promise ( (resolve) => {
       db.get(`account?email_like=${email}&password_like=${password}`, (response:any) => {
          setTimeout(()=>{
            resolve(response)
          },1000)
        }
      )
    }).then((result)=>{
      setLoginState(result)
    })
  }

  return {loginPost,loginState}
}