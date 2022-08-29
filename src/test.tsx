import { useDispatch, useSelector } from "react-redux"
import { increment, incrementByAmount } from "./Redux/counterSlice"



export default function Test(){


  return (
    <>
    <button
    onClick={()=> console.log("123")
    }
    >올리기</button>
    </>
  )

}