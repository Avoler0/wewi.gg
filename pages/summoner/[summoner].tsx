import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import Summoner from "../../component/summoner";
import NotFindSummoner from "../../component/summoner/404";
import { riot } from "../../hooks/riotApiHook";
import { searchSet } from "../../redux/search/searchSlice";
import { SearchReduxType } from "../../redux/store";

export default function SummonerPage(){
  const dispatch = useDispatch()
  const router = useRouter();
  const query = router.query.summoner;
  const searchType = "summoner"
  const [find,setFind] = useState(false);

  const summoner = useSelector((state:SearchReduxType) =>{
    return state.search
  })
  
  useEffect(()=>{
    if(query !== undefined){
      riot.summoner(searchType,query).then((_res:any)=>{
        if(_res === "not find"){
          setFind(false);
          dispatch(searchSet({type:"failed",value:_res}))
        }else{
          setFind(true);
          dispatch(searchSet({type:"success",value:_res}))
        }
        
      })
    }
  },[dispatch, query])
  
  if(summoner.type === null) return;
  return (
    <>
    {find ? <Summoner /> : <NotFindSummoner />
    }
    </>
  )
}
