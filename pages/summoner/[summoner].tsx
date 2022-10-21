import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import Summoner from "../../component/summoner";
import NotFindSummoner from "../../component/summoner/404";
import { search } from "../../hooks/search";
import { searchSet } from "../../redux/search/searchSlice";


export default function SummonerPage(){
  const router = useRouter();
  const dispatch = useDispatch()
  const query:any = router.query.summoner;
  const searchType = "summoner"
  const [find,setFind] = useState(false);
  const summoner = useSelector((state:any) =>{
    return state.search
  })
  
  useEffect(()=>{
    if(query !== undefined){
      search(searchType,query).then((_res)=>{
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
