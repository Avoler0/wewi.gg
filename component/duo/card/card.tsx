import styled from "styled-components";
import Image from "next/image";
import { riotImg } from "../../../hooks/riotImageHook";
import { timeHook } from "../../../hooks/timeHook";
import { filterName, tierUtils } from "../../../const/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DuoDelete from "../modal/delete/duoDelete";

type Rank = {
  tier:string,
  rank:string
}
type DuoRes = {
  summoner:string,
  memo:string,
  line:string,
  mode:string,
  password:number,
  id:number,
  mic:boolean,
  createdAt:number
  profileIconId:number,
  riotId:string,
  summonerLevel:number,
  soloRank:Rank,
  teamRank:Rank,
  threeChamp:string[]
}
type Props = {
  duoRes:DuoRes
}
type SummonerLeague = {
  tier:string,
  rank:string
}
function DuoCard({duoRes}:Props){
  const [showDelete,setShowDelete] = useState(false);
  const {summoner,mode,memo,line,password,id,mic,createdAt,profileIconId,riotId,summonerLevel,soloRank,teamRank,threeChamp} = duoRes;
  const soloRankValue = tierUtils.value(soloRank.tier);
  const teamRankValue = tierUtils.value(teamRank.tier);
  const rank = soloRankValue > teamRankValue ? soloRank : teamRank;

  // 티어 필터 ! , 카드 디자인 변경
  function rankSlice(tier:string){
    switch(tier){
      case 'MASTER':
        return false;
      case 'GRANDMASTER':
        return false;
      case 'CHALLENGER':
        return false;
      case 'UNRANKED':
        return false;
      default :
        return true;
    }
  }

  return (
    <>
      <Wrap >
        {showDelete ? (<DuoDelete hide={setShowDelete} id={id} pw={password}/>)  
        : (<>
        <Profile_Inner>
          <Info_Inner>
              <Link href={`summoner/${summoner}`}>
                <ProfileIcon imgPath={riotImg.profile(profileIconId)}>
                  <div />
                </ProfileIcon>
              </Link>
            <Info_Layer>
              <NickName nameLength={summoner.length}>
                  <Link href={`summoner/${summoner}`}>{summoner}</Link>
              </NickName>
              <Info_Column>
                <Level><span>Lv. {summonerLevel}</span></Level>
                <Tier tierColor={tierUtils.color(rank?.tier)} tierSize={rank?.tier.length}>
                  {rank?.tier && (
                    <>
                      <div className="tier main">{rank?.tier}</div>
                      <div className="tier number">{rankSlice(rank?.tier) ? String(rank?.rank).length : null}</div>
                    </>
                  )}
                </Tier>
              </Info_Column>
              <Info_Column style={{display:"flex",justifyContent: 'space-between'}}>
                <Mode>
                  <div>{filterName.mode(mode)}</div>
                </Mode>
                <MicCheck>
                  <div className="mic text">마이크</div>
                  <MicCircle mic={mic}/>
                </MicCheck>
              </Info_Column>
            </Info_Layer>
          </Info_Inner>
          <Game_Layer under={false} >
            <Game className="Game_Info">
              <Line>
                <Image src={`/images/line-icons/Line-${duoRes.line}-Ico.png`} alt="line" layout="fill" objectFit="cover" />
              </Line>
              <Champ>
                {threeChamp?.map((path,idx)=>{
                  return (
                    <div key={idx}>
                      <Image src={path} alt="line" layout="fill" objectFit="cover"/>
                    </div>
                  )
                })}
              </Champ>
            </Game>
          </Game_Layer>
        </Profile_Inner>
        <Content_Inner>
          <Memo_Layer>
            <span>{memo}</span>
          </Memo_Layer>
          <Footer_Layer>
            <Time>
              {<span>{timeHook.otherDay(createdAt)}</span>  }
            </Time>
            <Report>
              {/* <Link to="/reportView">신고 누적 : {report}회</Link> */}
            </Report>
            <Delete onClick={()=>setShowDelete(true)}>삭제</Delete>
          </Footer_Layer>
        </Content_Inner>
        </>
        )}
      </Wrap>
      
    </>
  )
}
export default React.memo(DuoCard);


const Wrap = styled.div`
  position: relative;
  background-color: #2c3e50 ;
  width: 180px ;
  height: 180px;
  border-radius: 15px ;
  color: white;
`;
const Delete = styled.div`
  
`;
const DeleteModal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 10;
  border-radius: 15px ;
`;
const Profile_Inner = styled.div`
  padding: 0.4rem 0 0 0.3rem;
  border-bottom: solid 1px rgba(123,122,142,1);
`;
const Info_Inner = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
  div{
    
  }
`;

const ProfileIcon = styled.div<{imgPath:string}>`
  display: inline-block;
  div{
    border: solid 1px white;
    border-radius: 25px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    background-image: ${props => `url(${props.imgPath})`};
    background-size: contain;
  }
`;
const Info_Layer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-left: 0.5rem;
`;
const Info_Column = styled.div`
  width: 100%;
  height: 100%;
  font-size: 13px;
`;
const NickName = styled.div<{nameLength:number}>`
  width: 100%;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
`;
const Level = styled.span`
  display: inline-block;
  font-size: 12px;
  color:#cec7c7;
`;
const Tier = styled.div<{tierColor:string,tierSize:number}>`
  display: inline-block;
  margin-left: 0.3rem;
  font-size: 12px;
  color: ${props => props.tierColor};
  .tier{
    display: inline-block;
  }
  .tier.number{
    margin-left: 0.2rem
  }
`;
const MicCheck = styled.div`
  display: inline-block;
  font-size: 13px;
  margin-right: 0.5rem;
  .mic{
    display: inline-block;
  }
  .mic.check{
    margin-left: 0.2rem;
  }

`;
const MicCircle = styled.div<{mic:boolean}>`
  display: inline-block;
  margin-left: 0.2rem;
  width: 12px;
  height: 12px;
  border-radius: 10px;
  background-color: ${props => props.mic ? "green" : "red"};
`;
const Mode = styled.div`
  display: inline-block;
`;




const Game_Layer = styled.div<{under:boolean}>`
  align-items: center;
  width: 100%;
  height: 40px;

`;

const Content_Inner = styled.div`
  padding: 0.2rem;
`;

const Memo_Layer = styled.div`
  text-align: left;
`;

const Footer_Layer = styled.div`
  position: absolute;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  right: 0;
  bottom: 0px;
  padding: 7px;
  width: 100%;
  color: rgba(255,255,255,0.7)
`;

const Time = styled.div`
  font-weight: 400;
`;

const Report = styled.div`
  
`;



const BoardDelete = styled.div``

;
const Game = styled.div`
  display:flex ;
  justify-content: space-between;
`;

const Line = styled.div`
  position: relative;
  width: 2.2rem;
  height: 2.2rem;
  background-color: rgba(66,66,84,0.8);
  border-radius: 1rem;
  img{
    border-radius: 1rem;
  }
`;
const Champ = styled.div`
  div{
    position: relative;
    display: inline-block;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 1rem;
    margin: 0 0.2rem;
  }
  img{
    border-radius: 1rem;
  }
`;



