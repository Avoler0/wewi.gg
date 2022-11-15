
import Link from "next/link";
import { useQuery } from "react-query";



export default function TestRender(){
  const { data: text } = useQuery('testText',()=>'' ,{
    staleTime: Infinity,
  });
  console.log(text);
  return (
    <>
      <div style={{fontSize:"56px"}}>{text}!!</div>
      <Link href={'/test'}>
        <button>테스트 이동</button>
      </Link>
    </>
  )
}
