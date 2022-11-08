import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {setLine, setMode, setTier} from "../../../redux/duo/filter"

type FilterState = {
  tier:string,
  mode:string,
  line:string
}
type Filter = {
  filter:FilterState
}


export default function DuoFilter(){
  const dispatch = useDispatch();
  const filter = useSelector((state:Filter) => {
    return state.filter
  })

  function addDuoFind(){
    console.log("등록")
  }
  const lines = ["All","Top","Mid","Jungle","Bottom","Support"]
  const options = {
    game:[
      {value:"all",label:"모두보기"},
      {value:"normal",label:"일반게임"},
      {value:"solo",label:"솔로랭크"},
      {value:"team",label:"자유랭크"},
      {value:"aram",label:"칼 바 람"},
      {value:"special",label:"특별모드"},
    ],
    tier:[
      {value:"all",label:"모두보기"},
      {value:"iron",label:"아이언"},
      {value:"bronze",label:"브론즈"},
      {value:"silver",label:"실버"},
      {value:"gold",label:"골드"},
      {value:"platinum",label:"플레티넘"},
      {value:"diamond",label:"다이아"},
      {value:"master",label:"마스터"},
      {value:"grandmaster",label:"그랜드마스터"},
      {value:"challenger",label:"챌린저"},
    ],
  }
  
  return (
    <Filter>
    <Column>
          <SelectForm>
            <Select defaultValue="solo" name="gameTypes" onChange={(event)=>{dispatch(setMode(event?.target.value))}}>
              {options.game.map(({value,label})=>{
                return <Option key={value} value={value}>{label}</Option>
              })}
            </Select>
            <Select defaultValue="gold" name="tierTypes" onChange={(event)=>{dispatch(setTier(event?.target.value))}}>
              {options.tier.map(({value,label})=>{
                return <Option key={value} value={value}>{label}</Option>
              })}
            </Select>
          </SelectForm>
        <LineTypes onClick={(event)=>{dispatch(setLine(event?.target.alt))}}>
          {lines.map((line:string)=>{
            return (
              <LineItems bgColor={filter.line === line ? "#7c7c83" : "#2c3e50"} key={line}>
                <Image src={`/images/line-icons/Line-${line}-Ico.png`} alt={line} layout="fill" objectFit="cover" />
              </LineItems>
            )
          })}
        </LineTypes>
      </Column>
      <Column>
        <AddButton onClick={addDuoFind}>등록</AddButton>
      </Column>
    </Filter>
  )
}
const Filter = styled.div`
  display: flex ;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 1199px) {
    width: 100%;
  }
  @media (max-width: 995px) {
    width: 80%;
  }
  @media (max-width: 600px){
    display: none;
  }
`;
const Column = styled.div`
  display: flex ;
  position: relative;

`;
const GameFilter = styled.div`
`;
const SelectForm = styled.div`

`;
const Select = styled.select`
  width: 1000px;
  margin-right: 20px ;
  font-size: 15px ;
  border: 1px solid (66,66,84,0.8);
  background-color: #2c3e50;
  width: 6.5rem;
  height: 2.2rem;
  border-radius: 5px;
  color: rgba(123,122,142,1);

  :focus{
    border: none;
  }
`;
const Option = styled.option`
  margin-top: 1rem;
`;
const TierFilter = styled.div`
`;
const TierSelect = styled.select`
  margin-right: 20px ;
  font-size: 15px ;
  width: 6.5rem;
  height: 2.2rem;
  border: 1px solid (66,66,84,0.8);
  border-radius: 5px;
  background-color: #2c3e50;
  color: rgba(123,122,142,1);
`;
const TierOption = styled.option`

`;

const LineTypes = styled.ul`
  display: flex ;
  margin: 0;
  list-style: none;
`;
const LineItems = styled.li<{bgColor:any}>`
  position: relative;
  width: 2.2rem;
  height: 2.2rem;
  padding: 0.2rem;
  border: none;
  background-color: ${(props) => props.bgColor};
  border: 1px solid rgba(66,66,84,0.8);
  cursor: pointer;
  img{
    width: 100%;
  }
`;
const AddButton = styled.button`
  width: 5.2rem;
  height: 2.2rem;
  margin-left: 20px;
  font-size: 16px;
  font-weight: bold;
  right: 0;
  margin-right: 3rem;
  background-color: #2c3e50;
  border: none;
  border-radius: 5px;
  color: rgba(123,122,142,1);
  cursor: pointer;
  @media (max-width: 1199px) {
    width: 5.2rem;
  }
  @media (max-width: 995px) {
    width: 3.2rem;
    margin-left: 4rem;
  }
  @media (max-width: 600px){

  }
`;