import React from "react";
import { isError, useQuery } from "react-query";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { tierUtils } from "../../const/utils";
import { dbHook } from "../../hooks/dbHook";
import DuoCard from "./card/card";
import DuoFilter, { Filter } from "./filter";


export default function DuoIndex() {
  const {data:duoDB,isLoading} = useQuery('duoDB',async () => await dbHook.duo.get());
  const filter = useSelector((state:Filter) => {
    return state.duoFilter
  })

  function filterling(res:any){
    const {mode,line} = filter;
    const tier = filter.tier.toUpperCase();
    const soloRankValue = tierUtils.value(res.soloRank.tier);
    const teamRankValue = tierUtils.value(res.teamRank.tier);
    const resTier = soloRankValue > teamRankValue ? res.soloRank.tier : res.teamRank.tier;

    const is = {
      tier:false,
      mode:false,
      line:false
    }
    
    if(mode === res.mode || mode == 'All' || res.mode == 'All') is.mode = true;
    if(line === res.line || line == 'All' || res.line == 'All') is.line = true;
    if(tier === resTier || tier == 'ALL') is.tier = true;
    
    return is.tier && is.mode && is.line
  }

  if(isLoading) return;

  return (
    <Container>
      <Wrapper >
        <DuoFilter />
          <BoardLayOut>
            {duoDB?.map((res:any)=> filterling(res) ? <DuoCard key={res.id} duoRes={res} /> : null )}
          </BoardLayOut>
        </Wrapper>
    </Container>
  );
}



const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 150px;  
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 792px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 568px;
  }
  @media (max-width: 767px){
	  width: 567px;
  }
`;
const BoardLayOut = styled.div`
  display:grid ;
  grid-template-columns: repeat(5,1fr) ;
  grid-gap: calc(20px);
  padding-top: 40px ;
  @media (max-width: 1199px) {
    grid-template-columns: repeat(4,1fr) ;
    grid-gap: calc(20px);
  }
  @media (max-width: 995px) {
    grid-template-columns: repeat(3,1fr) ;
    grid-gap: calc(15px);
  }
  @media (max-width: 572px){
    grid-template-columns: repeat(2,1fr) ;
  }
`;
const Board = styled.div`
  position: relative;
  background-color: #2c3e50 ;
  width: 180px ;
  height: 180px;
  border-radius: 15px ;

`;



