
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useDispatch,useSelector } from "react-redux";
import { riotImageHook } from "../hooks/server/riot/image";
import { riotMatchHook } from "../hooks/server/riot/match";


export default function Test(){
  const [text,setText] = useState();
  const queryClient = useQueryClient();
  const router = useRouter();

  const onClick = () => {
    riotImageHook.spell(12)
    .then((_res:any)=>{
      console.log('데이터',_res)
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
