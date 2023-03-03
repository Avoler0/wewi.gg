import { useRouter } from "next/router"
import { useEffect } from "react"


export default function ChampionsMain(){
  const router = useRouter();
  useEffect(()=>{
    alert('준비중입니다.')
    router.back();
  },[])
  
  return <div></div>
}