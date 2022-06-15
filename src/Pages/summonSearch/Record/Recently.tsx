import React from "react";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { getSummonerGameInfo } from "../../../api/api";
import { customAsync } from "../../../commons/asyncUtils";
import { AT_puuid } from "../../../commons/Atom";
import ChampRecently from "./RecentlyRecord/ChampRecently";
import RecordRecently from "./RecentlyRecord/RecordRecently"

function Recently({gameInfo}:any) {
  

  return (
  <>
  <ChampView>
    {/* <ChampRecently  /> */}
  </ChampView>
  <GameView >
    <RecordRecently gameInfo={gameInfo} />
  </GameView>
  </>
  );
}

export default React.memo(Recently);

const ChampView = styled.div`

`;
const GameView = styled.div`

`;

