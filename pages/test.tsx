
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useDispatch,useSelector } from "react-redux";
import { naverInstance } from "../hooks/axiosInstance";
import { dbHook } from "../hooks/dbHook";


export default function Test(){
  const [text,setText] = useState();
  const queryClient = useQueryClient();
  const router = useRouter();

  
  const onClick = async () => {
    

    // const header = `Bearer AAAAOJBO9YsEXa9PzuN2lQCFgeYzY4up_Fp2unRIfoISKBixBC0UA2xULs0UkZxqwj03L58ju-k5Out8e2cY-2G6lBg&state=da58fbe8-2352-47d8-a7ef-0b708ab508e7`
    // await naverInstance({
    //   method:'get',
    //   baseURL: 'https://openapi.naver.com/v1/nid/me',
    //   headers:{
    //     Authorization:header,
    //   },
    // }).then((_res) => {
    //   console.log(_res)
    // })
    // .catch((_error)=>{
    //   console.log('에러',_error)
    // })
  }
  return (
    <>
    <button onClick={onClick}>Query Save</button>
    <Link href={'/testrender'}>
      <button>렌더 이동</button>
    </Link>
    </>
  )
}
