import React from "react";
import { useDispatch } from "react-redux";
import Header from "../../Components/GNB/GNBIndex";
import { accountState } from "../../Redux/accountRedux/accountSlice";
import Router from "../../Router";



export default function Layout(){
  const dispatch = useDispatch();
  React.useEffect(()=>{
    dispatch(accountState())
  },[])
  return(
    <>
      <Header />
      <Router />
    </>
  )
}