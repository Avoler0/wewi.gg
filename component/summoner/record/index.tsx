import React from "react";
import styled from "styled-components";
import RecordCard from "./card";
// import RecordRecently from "./RecentlyRecord/RecordRecently"
type props = {
  matchList:string[]
}
export default function Record({matchList}:any) {
  console.log(matchList);
  

  return (
  <>
  <ChampView>
    {/* <ChampRecently  /> */}
  </ChampView>
  <GameView >
    {matchList.map((match:string)=>{
      return (<RecordCard key={match} match={match} />)
    })}
  </GameView>
  </>
  );
}

const ChampView = styled.div`

`;
const GameView = styled.div`

`;

