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
          <FilterLine dispatch={dispatch} lineSelect={filter.line}/>
        </div>
        <SelectFilter>
          <FilterLayout><FilterMode dispatch={dispatch}/></FilterLayout>
          <FilterLayout><FilterTier dispatch={dispatch}/></FilterLayout>
        </SelectFilter>
      </Column>
      <Column>
        <AddButton onClick={toggle}>소환사 등록하기</AddButton>
      </Column>
      {isShowing && <DuoModal isShowing={isShowing} hide={toggle} method="ADD" />}
    </Filter>
  )
}


const Filter = styled.div`
  display: flex ;
  justify-content: space-between;
  width: 100%;
  height: 2.5rem;
  color: #ece5e5;
  margin-bottom: 2rem;
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
const SelectFilter = styled.div`
  display: flex;
`; 
const FilterLayout = styled.div`
  margin-left: 2rem ;
  border: 1px solid rgb(75, 75, 100);
  background-color: rgb(22, 43, 59);
`;
const AddButton = styled.button`
  height: 100%;
  margin-left: 20px;
  font-size: 16px;
  font-weight: 60;
  right: 0;
  padding: 0 .5rem;
  align-items: center;
  vertical-align: middle;
  border: 1px solid rgb(75, 75, 100);
  background-color: rgb(37, 131, 84);
  cursor: pointer;
  color: #ece5e5;
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