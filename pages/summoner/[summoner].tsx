import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import Summoner from "../../component/summoner";
import NotFindSummoner from "../../component/summoner/404";
import { riot } from "../../hooks/riotApiHook";
import { searchSet } from "../../redux/search/searchSlice";
import { SearchReduxType } from "../../redux/store";

export default function SummonerPage(){
  const router = useRouter();
  const searchString = router.query.summoner;

  const summoner = useSelector((state:SearchReduxType) =>{
    return state.search
  })

  return (
    <>
    {searchString === undefined ?
      <NotFindSummoner /> 
      : 
      <Summoner searchString={searchString} /> 
    }
    </>
  )
}
