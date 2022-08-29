import styled from "styled-components"
import { getProfileIcon } from "../../../api/riotApi";
import {ReactComponent as Up} from "/MyApp/wewi.gg/src/images/icons/thumbs-up-svgrepo-com.svg"
import {ReactComponent as Down} from "/MyApp/wewi.gg/src/images/icons/thumbs-down-svgrepo-com.svg"


const ProfileWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px;
`;
const IconBox = styled.div`
  width: 30%;
  margin: 0 10px;
  overflow: hidden; // 박스 넘어가는 부분의 이미지를 잘라줌
  position: relative;
  img{
    position: absolute;
    width: 80%;
    left: 10%;
    border: 2px solid gray;
    border-radius: 150px;
  }
`;
const LevelBox = styled.div`
  position: absolute;
  left: 30%;
  bottom: 0;
  z-index: 2;
  
  border: 1px solid white;
  border-radius: 150px;
  
  
  background-color: gray;
`;
const Level = styled.div`
  font-weight: bold;
  font-size: 14px;
`;
const NameBox = styled.div`
  
`;
const Name = styled.div`
  margin: 10px 0 5px 0;
  font-size: 18px;
  font-weight: bold;
  color: white;
`;
const Update = styled.div`
  font-size: 12px;
    font-weight: none;
`;
const Vote = styled.div`
  display: flex;
  position: relative;
`;
const Good = styled.div`
  display: inline-block;
  position: relative;
  margin-top: 10px;
  margin-right: 10px;
  span{
    position: absolute;
    font-size: 12px;
    right: 5px;
    bottom: 8px;
    color: black;
    font-weight: bold;
  }
`;
const Bad = styled.div`
  display: inline-block;
  position: relative;
  
  margin-top: 15px;
  span{
    position: absolute;
    font-size: 12px;
    right: 5px;
    bottom: 8px;
    color: black;
    font-weight: bold;
  }
`;
interface I_summonerInfo {
    summonerInfo:{
      data:{
        accountId: string,
        id: string,
        name: string,
        profileIconId: number,
        puuid: string,
        revisionDate: number,
        summonerLevel: number,
      }
    }
}
function Profile({summonerInfo}:any) {
  const {
    id , name , profileIconId , puuid , revisionDate , summonerLevel
  } = summonerInfo.data;
  return(
    <ProfileWrap>
      <IconBox>
        <img src={ getProfileIcon(profileIconId) }/>
      <LevelBox>
        <Level>{summonerLevel}</Level>
      </LevelBox>
      </IconBox>
      <NameBox>
        <Name>
          {name}
        </Name>
        <Update>      
          최근 업데이트:하루전
        </Update>
        <Vote>
          <Good><Up style={{width:"20px",height:"20px"   ,boxSizing:"content-box" , fill:"yellow"}} /><span>0</span></Good>
          <Bad><Down style={{width:"20px",height:"20px"   ,boxSizing:"content-box" , fill:"yellow"}} /><span>0</span></Bad>
        </Vote>
      </NameBox>
      
    </ProfileWrap>
  )
}

export default Profile;