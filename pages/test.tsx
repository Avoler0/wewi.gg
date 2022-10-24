import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";


export default function Test(){

  async function asss(){
    return await new Promise((resolve)=>{
      resolve('hi')
    })
  }
  async function onClick(){
    const result = await asss()
    return result;
  }
  function hhh(){
    const result = onClick();
    console.log(result);
    
  }
  return (
    <>
    <button onClick={hhh}>hg</button>
    </>
  )
}
