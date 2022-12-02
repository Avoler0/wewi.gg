
import Link from "next/link";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useDispatch,useSelector } from "react-redux";
import { dbHook } from "../hooks/dbHook";


export default function Test(){
  const [text,setText] = useState();
  const queryClient = useQueryClient();
  const datares = useSelector( state => {
    return state.duoData
  })
  console.log("데이터레스",datares)
  const onClick = () => {
    dbHook.account.naver.join('AAAAOMaVURpCWOGVthxS1_g_oQQDLK_WMqD8GbHdPLaqMBxsF4qehze9ww833IO7Cc8rkWhHP-pV7pfM1gtBG3YPdk')
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
