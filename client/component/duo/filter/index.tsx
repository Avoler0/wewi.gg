import React from "react";
import styled from "styled-components";
import { useSelector,useDispatch } from "react-redux";
import useModal from "../../../hooks/useModal";
import DuoModal from "../modal/modal";
import FilterMode from "./mode";
import FilterTier from "./tier";
import FilterLine from "./line";

type FilterState = {
  tier:string,
  mode:string,
  line:string
}
export type Filter = {
  duoFilter:FilterState
}


export default function DuoFilter(){ // 듀오 카드 필터링 Index
  const {isShowing,toggle} = useModal();
  const dispatch = useDispatch();
  const filter = useSelector((state:Filter) => {
    return state.duoFilter
  })
  
  return (
    <Filter>
    <Column>
      <div>
        <FilterMode dispatch={dispatch}/>
        <FilterTier dispatch={dispatch}/>
      </div>
      <div>
        <FilterLine dispatch={dispatch} lineSelect={filter.line}/>
      </div>
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