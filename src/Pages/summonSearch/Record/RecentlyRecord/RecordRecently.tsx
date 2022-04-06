import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { getSummonerRecordInfo } from "../../../../api/api";
import { customAsync } from "../../../../commons/asyncUtils";
import { AT_puuid } from "../../../../Router/Api/RiotRecordApi";
import GameList from "./GameList/GameList";

function RecordRecently({list}:any) {
  const [isLoading,setIsLoading] = useState<boolean>(true);
  const [recordInfo,setRecordInfo] = useState<any>();
  console.log(list);
  
  // useEffect(() => {
  //   setIsLoading(true);
  //   new Promise(async ()=> {
  //     await customAsync(getSummonerRecordInfo(list),1000).then((res:any) =>{
  //       setRecordInfo(res.data)
  //       setIsLoading(false)
  //     })
  //   })
  // },[])
  
   if(isLoading){
    return <div>기록 없음</div>
  }
  // console.log(recordInfo);
  
  return (
    <RecordUl>
        {/* <GameList gameInfo={recordInfo}/> */}
    </RecordUl>
  );
}

export default RecordRecently;

const RecordUl = styled.ul`

`;
