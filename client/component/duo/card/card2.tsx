import styled from "styled-components"
import Image from "next/image"
import { tierUtils } from "../../../const/utils"
import { timeHook } from "../../../hooks/timeHook"
import { useEffect, useState } from "react"

type RankType = {
  freshBlood:boolean
  hotStreak:boolean
  inactive:boolean
  leagueId:string
  leaguePoints:number
  losses:number
  queueType:string
  rank:string
  summonerId:string
  summonerName:string
  tier:string
  veteran:boolean
  wins:number
}
type DuoRes = {
  Id:number,
  SeekerName:string,
  Line:string,
  Mode:string,
  Mic:boolean,
  Content:string,
  Password:string,
  League:string,
  Champions:string,
  CreateAt:string,
  SeekerIcon:string,
  SeekerLevel:number
}
type Props = {
  duoRes:DuoRes
  filter:any
}

export default function DuoCard2({duoRes,filter}:Props){
  const {Id,SeekerName,Line,Mode,Mic,Content,Password,League,Champions,SeekerIcon,SeekerLevel,CreateAt} = duoRes;
  const {tier,line,mode} = filter;
  const [createAtState,setCreateAtState] = useState('');
  let soloRank:RankType | null = null;
  let teamRank:RankType | null = null;
  JSON.parse(League).forEach((data:any)=>{ // 솔로랭크 , 자유랭크를 나누기 위한 for 문
    if(data.queueType === 'RANKED_SOLO_5x5') soloRank = data;
    if(data.queueType === 'RANKED_FLEX_SR') teamRank = data;
  })
  const leagueParse:any = tierUtils.value(soloRank && soloRank['tier']) > tierUtils.value(teamRank && teamRank['tier']) ?
                          soloRank && soloRank : teamRank && teamRank;

  const tierName:string | null =  leagueParse ? leagueParse?.tier.toLowerCase() + ' ' + tierUtils.number(leagueParse?.rank) : null;
  const winRate = Math.round(leagueParse?.wins / (leagueParse?.wins + leagueParse?.losses) * 100);
  const loseRate = Math.round(leagueParse?.losses / (leagueParse?.wins + leagueParse?.losses) * 100)


  useEffect(()=>{
    setCreateAtState(timeHook.otherDay(new Date(CreateAt).getTime()))
    setInterval(()=>{
      setCreateAtState(timeHook.otherDay(new Date(CreateAt).getTime()))
    },60000)
  },[])
  return (
    <Card>
      <User>
        <UserIcon imgPath={SeekerIcon}/>
        <span>{SeekerName}</span>
      </User>
      <LineDIV>
        <span>
          <img src={`/images/line-icons/Line-${Line}-Ico.png`} alt="라인" width="32" height="32"/>
        </span>
      </LineDIV>
      <Tier>
        <TierIcon>
          {leagueParse ? (
            <img src={`/images/tier-icons/emblem-icons/80px/${leagueParse.tier.toLowerCase()}.webp`} alt="티어" width="24" height="24"/>) 
            : 
            <img src={`/images/tier-icons/emblem-icons/emblem-unranked.svg`} alt="티어" width="24" height="24"/>}
        </TierIcon>
        {tierName ? 
        <span>{tierName.charAt(0).toUpperCase() + tierName.slice(1)}</span>  :
        <span style={{color: 'RGB(110, 109, 127)'}}>Unranked</span>
      }
      </Tier>
      <Champ>
        {Champions.split(',')?.map((path:string)=>{
          return (
            <ChampIcon key={path}>
              <img src={path} alt="챔피언" />
            </ChampIcon>
          )
        })}
      </Champ>
      <WinRate>
        <Rate>
          <Win divWidth={winRate}></Win>
          <Lose divWidth={loseRate}></Lose>
        </Rate>
        <span>{winRate ? winRate+'%' : null}</span>
      </WinRate>
      <KDA>
        <div>0.0 / 0.0 / 0.0</div>
        <span>0</span>
      </KDA>
      <Memo>
        <span>
          {Content}
        </span>
      </Memo>
      <Create>
        {createAtState}
      </Create>
    </Card>
  )
}


const Card = styled.div`
  padding: .425rem;
  display: flex;
  font-size: .75rem;
  flex-shrink: 0;
  align-items: center;
`;

const User = styled.div`
  display: flex;
  width: 16%;
  padding: .5rem .625rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break:break-all;
  align-items: center;
  span{
    align-items: center;
    vertical-align: middle;
  }
`;

const UserIcon = styled.span<{imgPath:string}>`
  display: inline-block;
  width: 32px;
  height: 32px;
  background-color: red;
  border-radius: 15px;
  margin-right: 1rem;
  background-image: ${props => `url(${props.imgPath})`};
  background-size: contain;
  
`;

const LineDIV = styled.div`
  width: 5%;
  text-align: center;
  padding: .5rem .625rem;
  span{
    display: inline-block;
    height: 100%;
  }
  img{
    filter: opacity(0.5) drop-shadow(0 0 0 RGB(0, 187, 163));
  }
`;

const Tier = styled.div`
  display: flex;
  width: 13%;
  align-items: center;
  padding: .5rem .625rem;
`;

const TierIcon = styled.span`
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
  align-items: center;
`;

const Champ = styled.div`
  width: 15%;
  text-align: center;
  align-items: center;
  padding: .5rem .625rem;
`;

const ChampIcon = styled.span`
  display: inline-block;
  align-items: center;
  width: 32px;
  height: 32px;
  margin-right: .625rem;
  img{
    border-radius: 15px;
  }
`;

const WinRate = styled.div`
  display: flex;
  width: 15%;
  padding: .5rem .625rem;
  align-items: center;
  justify-content: space-between;
  span{
    width: 20%;
    margin-left: .4rem;
  }
`;

const Rate = styled.div`
  width: 80%;
  height: 60%;
  background-color: black;
  border-radius: 5px;
  z-index: 1;
  overflow: hidden;
`;

const Win = styled.div<{divWidth:number}>`
  display: inline-block;
  background-color: rgb(67, 64, 240);
  width: ${props => props.divWidth}%;
  height: 100%;
`;
const Lose = styled.div<{divWidth:number}>`
  display: inline-block;
  background-color: rgb(231, 77, 97);
  width: ${props => props.divWidth}%;
  height: 100%;
`
const KDA = styled.div`
  display: flex;
  width: 9%;
  flex-direction: column;
  vertical-align: middle;
  justify-content: center;
  margin-left: 1rem;
  div{
    font-size: .725rem;
  }
  span{
    font-weight: 700;
  }
`;

const Memo = styled.div`
  width: 20%;
  padding: .2rem;
  text-align: center;
  font-size: .725rem;
  span{
    display: inline-block;
    padding: .3rem .5rem;
    background-color: rgb(27, 52, 71);
    border-radius: 5px;
    border: 1px solid rgba(25, 60, 87, 0.76);
  }
`;

const Create = styled.div`
  width: 7%;
  flex-shrink: 0;
  text-align: center;
`;