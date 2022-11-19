import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {duoSetFilter} from "../../../redux/duo/filter"
import useModal from "../../../hooks/useModal";
import DuoModal from "../modal/modal";
import { options } from "../../../const/utils";

type FilterState = {
  tier:string,
  mode:string,
  line:string
}
export type Filter = {
  duoFilter:FilterState
}


export default function DuoFilter(){
  const {isShowing,toggle} = useModal();
  const dispatch = useDispatch();

  const filter = useSelector((state:Filter) => {
    return state.duoFilter
  })
  
  return (
    <Filter>
    <Column>
          <SelectForm>
            <Select defaultValue="solo" name="gameMode" onChange={(event)=>{dispatch(duoSetFilter({type:"mode",value:event?.target.value}))}}>
              {options.game.map(({value,label})=>{
                return <Option key={value} value={value}>{label}</Option>
              })}
            </Select>
            <Select defaultValue="gold" name="tierTypes" onChange={(event)=>{dispatch(duoSetFilter({type:"tier",value:event?.target.value}))}}>
              {options.tier.map(({value,label})=>{
                return <Option key={value} value={value}>{label}</Option>
              })}
            </Select>
          </SelectForm>
        <LineTypes onClick={(event)=>{dispatch(duoSetFilter({type:"line",value:event?.target.alt}))}}>
          {options.lines.map((line:string)=>{
            return (
              <LineItems bgColor={filter.line === line ? "#7c7c83" : "#2c3e50"} key={line}>
                <Image src={`/images/line-icons/Line-${line}-Ico.png`} alt={line} layout="fill" objectFit="cover" />
              </LineItems>
            )
          })}
        </LineTypes>
      </Column>
      <Column>
        <AddButton onClick={toggle}>등록</AddButton>
      </Column>
      {isShowing && <DuoModal isShowing={isShowing} hide={toggle} method="ADD" />}
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


`;
const Option = styled.option`
  margin-top: 1rem;
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