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
  Id:number,
  SeekerName:string,
  Line:string,
  Mode:string,
  Mic:boolean,
  Content:string,
  Password:string,
  League:string,
  Champions:string,
  CreateAt:string
}
type Props = {
  duoRes:DuoRes
}
type SummonerLeague = {
  tier:string,
  rank:string
}
function DuoCard({duoRes}:any){
  
  const {Id,SeekerName,Line,Mode,Mic,Content,Password,League,Champions,SeekerIcon,SeekerLevel,CreateAt} = duoRes
  console.log(JSON.parse(League))
  const [showDelete,setShowDelete] = useState(false);
  // const {summoner,mode,memo,line,password,id,mic,createdAt,profileIconId,riotId,summonerLevel,soloRank,teamRank,threeChamp} = duoRes;
  // const soloRankValue = tierUtils.value(soloRank.tier);
  // const teamRankValue = tierUtils.value(teamRank.tier);
  // const rank = soloRankValue > teamRankValue ? soloRank : teamRank;

  // // 티어 필터 ! , 카드 디자인 변경
  // function rankSlice(tier:string){
  //   switch(tier){
  //     case 'MASTER':
  //       return false;
  //     case 'GRANDMASTER':
  //       return false;
  //     case 'CHALLENGER':
  //       return false;
  //     case 'UNRANKED':
  //       return false;
  //     default :
  //       return true;
  //   }
  // }
  return (
    <>
      <Wrap >
        {showDelete ? (<DuoDelete hide={setShowDelete} id={Id} pw={Password}/>)  
        : (<>
        <Profile_Inner>
          <Info_Inner>
              <Link href={`summoner/${SeekerName}`}>
                <ProfileIcon imgPath={SeekerIcon}>
                  <div />
                </ProfileIcon>
              </Link>
            <Info_Layer>
              <NickName nameLength={SeekerName.length}>
                  <Link href={`summoner/${SeekerName}`}>{SeekerName}</Link>
              </NickName>
              <Info_Column>
                <Level><span>Lv. {SeekerLevel}</span></Level>
                {/* <Tier tierColor={tierUtils.color(rank?.tier)} tierSize={rank?.tier.length}>
                  {rank?.tier && (
                    <>
                      <div className="tier main">{rank?.tier}</div>
                      <div className="tier number">{rankSlice(rank?.tier) ? String(rank?.rank).length : null}</div>
                    </>
                  )}
                </Tier> */}
              </Info_Column>
              <Info_Column style={{display:"flex",justifyContent: 'space-between'}}>
                <ModeWrap>
                  <div>{filterName.mode(Mode)}</div>
                </ModeWrap>
                <MicCheck>
                  <div className="mic text">마이크</div>
                  <MicCircle mic={Mic}/>
                </MicCheck>
              </Info_Column>
            </Info_Layer>
          </Info_Inner>
          <Game_Layer under={false} >
            <Game className="Game_Info">
              <LineImage>
                <Image src={`/images/line-icons/Line-${Line}-Ico.png`} alt="line" layout="fill" objectFit="cover" />
              </LineImage>
              <Champ>
                {Champions.split(',')?.map((path:string,idx:number)=>{
                  console.log(path)
                  return (
                    <div key={idx}>
                      <Image src={path} alt="champ" layout="fill" objectFit="cover"/>
                    </div>
                  )
                })}
              </Champ>
            </Game>
          </Game_Layer>
        </Profile_Inner>
        <Content_Inner>
          <Memo_Layer>
            <span>{Content}</span>
          </Memo_Layer>
          <Footer_Layer>
            <Time>
              {<span>{timeHook.otherDay(new Date(CreateAt).getTime())}</span>  }
            </Time>
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
const ModeWrap = styled.div`
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
const Game = styled.div`
  display:flex ;
  justify-content: space-between;
`;

const LineImage = styled.div`
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



