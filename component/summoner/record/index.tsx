import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { riot } from "../../../hooks/riotApiHook";
import RecordCard from "./card";
// import RecordRecently from "./RecentlyRecord/RecordRecently"
type props = {
  matchList:string[]
}
export default function Record({matchList}:any) {
  // console.log("매치리스트124",matchList);
  const matchLi = ['KR_6171170875', 'KR_6171056283', 'KR_6170148681']
  const [isLoading,setIsLoading] = useState(true);
  const [matchDetail,setMatchDetail] = useState([]);
  var pron = new Array();

  async function readMatchDetail() {
    return await Promise.all(matchLi.map((match)=>{
        return riot.record(match)
        .then((_res:any)=>{
          const response = _res.data
          pron.push(response)
          return response
        })
        .catch((_error:any)=>{
          console.log("record failed",_error);
          return _error
        })
      })) 
  }
  async function getPromiseValue(){
    const result = await readMatchDetail()
    console.log(result);
    
  }
  // loop()
  useEffect(()=>{
    setIsLoading(false)
    if(!isLoading){
      (async()=>{
        const result = await Promise.all(
          matchList.map((match)=>{
            return riot.record(match)
            .then((_res:any)=>{
              const response = _res.data
              return response
            })
            .catch((_error:any)=>{
              console.log("record failed",_error);
              return _error
            })
          })
        ) 
        setMatchDetail(result)
      })()
    }
  },[isLoading])
  
  useEffect(()=>{
    console.log("디테일",matchDetail);
    console.log("디테일2",pron);
    
  },[matchDetail,pron])
  console.log(pron);
  
  console.log("레코드 인덱스 실행");
  
  if(isLoading) return (<div>없음</div>)
  return (
  <>
  <ChampView>
    {/* <ChampRecently  /> */}
  </ChampView>
  <GameView >
    {/* {matchList.map((match:string)=>{
      setTimeout(()=>{
        return (<RecordCard key={match} match={match} />)
      },100)
    })} */}
  </GameView>
  </>
  );
}

const ChampView = styled.div`

`;
const GameView = styled.div`

`;

