
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useDispatch,useSelector } from "react-redux";
import { naverInstance } from "../hooks/axiosInstance";
import { riotSummonerHook } from "../hooks/server/riot/summoner";


export default function Test(){
  const [text,setText] = useState();
  const queryClient = useQueryClient();
  const router = useRouter();

  
  const onClick = async () => {
    await riotSummonerHook.info('스쿵씨')
    .then((_res:any)=>{
      console.log(_res)
    })
  }
  return (
    <>
    <button onClick={onClick}>테스트 버튼</button>
    <Link href={'/testrender'}>
      <button>렌더 이동</button>
    </Link>
    </>
  )
}
