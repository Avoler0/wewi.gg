import { useEffect, useState } from "react";
import { timeHook } from "../../../hooks/timeHook";



export default function CardTime({time}:any){
  const [gameTime,setGameTime] = useState<any>();

  useEffect(()=>{
    const id = setInterval(() => setGameTime(timeHook.secDuration(time)), 1000);
    return (() => clearInterval(id))
  })

  return (
    <span>
      {gameTime}
    </span>
  )
}