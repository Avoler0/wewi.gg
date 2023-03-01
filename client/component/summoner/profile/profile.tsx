import styled from "styled-components";
import Image from "next/image";
import { riotImageHook } from "../../../hooks/server/riot/image";
import { useEffect, useState } from "react";

export default function SummonerProfile({profile}:any) {
  const { name, profileIconId, summonerLevel } = profile;
  const [profileIcon,setProfileIcon] = useState(null);
  
  useEffect(()=>{
    (async ()=>{
      await riotImageHook.profile(profileIconId)
      .then((_res)=> setProfileIcon(_res))
    })()
  })
  if(!profileIcon) return <div></div>
  return(
    <ProfileWrap>
        <IconBox >
          <Image src={`${profileIcon}`} alt="icon" width="100" height="100" objectFit="cover" />
          <LevelBox>
            <Level>{summonerLevel}</Level>
          </LevelBox>
        </IconBox>
      <NameBox>
        <Name>
          {name}
        </Name>
      </NameBox>
    </ProfileWrap>
  )
}

const ProfileWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px;
`;
const IconBox = styled.div`
  display: inline-block;
  width: 30%;
  height: 6.7rem;
  margin: 0 10px;
  overflow: hidden; // 박스 넘어가는 부분의 이미지를 잘라줌
  position: relative;
  text-align: center;
  span{
    border-radius: 15px;
  }
`;
const LevelBox = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 45%;
  max-width: 60%;
  margin: 0 auto;
  bottom: 0.7rem;
  border: 1px solid white;
  border-radius: 10px;
  background-color: #cccccc;
`;
const Level = styled.span`
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;
const NameBox = styled.div`
  margin-left: 10px;
`;
const Name = styled.div`
  margin: 10px 0 5px 0;
  font-size: 18px;
  font-weight: bold;
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