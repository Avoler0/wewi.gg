import { useState } from "react";
import Image from "next/image";
import styled , {css} from "styled-components";
import { options } from "../../../../const/utils";
import {dbHook} from "../../../../hooks/dbHook"
import { riot } from "../../../../hooks/riotApiHook";
import { riotImg } from "../../../../hooks/riotImageHook";

type InputValid = {
  summoner: boolean,
  password:boolean
}
type Line = "All" | "Top" | "Jungle" | "Bottom" | "Support"
type Mode = "All" | "Normal" | "Solo" | "Team" | "Aram" | "Special"
type Rank = {
  tier:string,
  rank:string
}
type Info = {
  riotId:string,
  profileIconId:number,
  summonerLevel:number
  soloRank:Rank,
  teamRank:Rank,
  threeChamp:string[]
} | boolean;
function DuoInput({hide}:any) {

  
  return (
    <Wrap>
      
      <Form id="myForm" name="myForm">
        
      </Form>
    </Wrap>
  );
}

export default DuoInput;


const Wrap = styled.div`
  position: absolute;
  width: 30rem;
  height: 28.4rem;
  background-color: #2c3e50;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
const Head = styled.div`
  padding: 14px 14px 8px 14px;
  display: flex;
  justify-content: space-between;
`;
const CardName = styled.h3`
  font-weight: bold;
  color: white;
`;

const Xbutton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  border-top: 1px solid black;
`;

const Label = styled.label`
  font-size: 12px;
  display: block;
  color: rgba(123,122,142,0.8);
  margin-bottom: 8px;
`;
const Input = styled.input`
  height: 2.5rem;
  font-size: 0.875rem;
  background-color: #28283b;
  color: white;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 5px;
  padding: 0.8rem;
  :focus,:active{
    outline: none;
  }
`;
const ColumnMiddle = styled.div`
  display: flex;
  padding: 8px 0 8px 0;
`;
const LineWrap = styled.div`
  padding: 0 15px 0 0;
`;
const LineBox = styled.ul`
  display: flex;
`;
const LineItem = styled.li<{bgColor:any}>`
  position: relative;
  width: 2.2rem;
  height: 2.2rem;
  padding: 0.2rem;
  border: 1px solid rgba(66,66,84,0.8);
  color: white;
  cursor: pointer;
  background-color: ${(props) => props.bgColor};
  img{
    width: 100%;
  }
`;

const QueueType = styled.div`
  padding: 0 15px 0 15px;
`;
const TypeSelect = styled.select`
  width: 6.5rem;
  height: 2.5rem;
  background-color: #28283b;
  border: 1px solid rgba(0,0,0,0.2);
  color: white;
  font-size: 14px;
  cursor: pointer;
`;
const TypeOption = styled.option`
  
`;
const MicCheck = styled.div`
  margin-left: 15px;
`;
const MicButton = styled.div<{micToggle:boolean}>`
  position: relative;
  width: 64px;
  height: 32px;
  border-radius: 9999px;
  padding: 0;
  background-color: ${(props) => props.micToggle ? "#7c7c83": "#28283b"};
  cursor: pointer;
  border: none;
  :hover{
    background-color: #7c7c83;
  }
`;
const MicCircle = styled.span<{micToggle:boolean}>`
  position: absolute;
  background-color: white;
  width: 28px;
  height: 28px;
  top: 2px;
  left: 2px;
  border-radius: 50px;
  transition: all 0.2s ease-in;
  ${(props) => 
    props.micToggle &&
    css`
      transform: translateX(32px);
    `}

`;

const PassWord = styled.div`
  padding: 12px 0 12px 0;
`;
const ExitWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  
`;
const CancelBt = styled.button`
  width: 48%;
  height: 3.2rem;
  border: 0.08rem solid rgba(123,122,142,0.8);
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
`;
const OkBt = styled.button`
  width: 48%;
  height: 3.2rem;
  border: 0.08rem solid rgba(123,122,142,0.8);
  border-radius: 5px;
  background-color: #7c7c83;
  cursor: pointer;
`;
const InputError = styled.span`
  font-size: 12px;
  color:#dd1010e8;
`;