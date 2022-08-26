import { useDispatch, useSelector } from "react-redux"
import { increment, incrementByAmount } from "./Redux/counterSlice"



export default function Test(){
  const count = useSelector((state:any) => state.counter.value)
  const dispatch = useDispatch()
  function func1(number:any,callback:any){
  setTimeout(()=>{
   callback(number+5);
 },1000)
}
function func2(number:any,callback:any){
  setTimeout(()=>{
   callback(number+10);
 },1000)
}
function func3(number:any,callback:any){
  setTimeout(()=>{
   callback(number+15);
 },1000)
}

function logFunc(number:any) {
 console.log("실행",number);
}
func1(0,(number:any)=> func2(number,(number:any)=>func3(number,(number:any) => logFunc(number))));
  return (
    <>
    <span>{count}</span>
    <button
    onClick={()=> dispatch(incrementByAmount(5))}
    >올리기</button>
    </>
  )

}