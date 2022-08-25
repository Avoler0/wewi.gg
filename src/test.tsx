import { useDispatch, useSelector } from "react-redux"
import { increment, incrementByAmount } from "./Redux/counterSlice"



export default function Test(){
  const count = useSelector((state:any) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
    <span>{count}</span>
    <button
    onClick={()=> dispatch(incrementByAmount(5))}
    >올리기</button>
    </>
  )

}