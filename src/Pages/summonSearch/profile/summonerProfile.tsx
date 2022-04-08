import styled from "styled-components"

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
interface I_BasicData {
  basicData:{
    accountId: string,
    id: string,
    name: string,
    profileIconId: number,
    puuid: string,
    revisionDate: number,
    summonerLevel: number,
  }
}
function Profile(props:I_BasicData) {
  return(
    <ProfileWrap>
      <IconBox>
        <img src={`http://ddragon.leagueoflegends.com/cdn/10.11.1/img/profileicon/${props.basicData?.profileIconId}.png`}/>
      <LevelBox>
        <Level>{props.basicData.summonerLevel}</Level>
      </LevelBox>
      </IconBox>
      <NameBox>
        <Name>
          {props.basicData.name}
        </Name>
        <Update>      
          최근 업데이트:하루전
        </Update>

      </NameBox>
    </ProfileWrap>
  )
}

export default Profile;