import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import FindSummoner from "../../component/summoner/Find";
import NotFindSummoner from "../../component/summoner/notFind";
import { search } from "../../hooks/search";
import { searchSet } from "../../redux/search/searchSlice";


export default function Summoner(){
  const router = useRouter();
  const dispatch = useDispatch()
  const query:any = router.query.summoner;
  const searchType = "summoner"
  const summoner = useSelector((state:any) =>{
    return state.search
  })
  
  useEffect(()=>{
    if(query !== undefined){
      search(searchType,query).then((_res)=>{
        if(_res === "not find"){
          dispatch(searchSet({type:"failed",value:_res}))
        }else{
          dispatch(searchSet({type:"success",value:_res}))
        }
        
      })
    }
  },[dispatch, query])

  return (
    <>
    {summoner.type === 'success' ?
      <FindSummoner /> : <NotFindSummoner />
    }
    </>
  )
}
