import { useEffect, useState } from "react";
import styled from "styled-components";
import GameList from "./GameList/GameList";


function RecordRecently({gameInfo}:any) {
  const [isLoading,setIsLoading] = useState<boolean>(true);
  let recordCount = 0;
  // console.log("게임인포",gameInfo);


  useEffect(()=>{
    if(gameInfo) setIsLoading(false)
  },[gameInfo])
  

   if(isLoading){
    return <div>기록 없음</div>
  }

  return (
    <RecordUl>
        {gameInfo.map((data:any) => <GameList key={recordCount++} gameInfo={data}/>)}
    </RecordUl>
  );
}

export default RecordRecently;

const RecordUl = styled.ul`

`;
