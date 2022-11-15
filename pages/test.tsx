
import Link from "next/link";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useDispatch,useSelector } from "react-redux";


export default function Test(){
  const [text,setText] = useState();
  const queryClient = useQueryClient();
  const datares = useSelector( state => {
    return state.duoData
  })
  console.log("데이터레스",datares)
  const onClick = () => {
    queryClient.setQueryData('testText',text)
    console.log("쿼리 저장",text)
  }
  return (
    <>
    <button onClick={() => {setText("Hello World")}}>Hello World !!</button>
    <button onClick={onClick}>Query Save</button>
    <Link href={'/testrender'}>
      <button>렌더 이동</button>
    </Link>
    </>
  )
}
