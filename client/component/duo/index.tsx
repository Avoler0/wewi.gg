import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { matesHook } from "../../hooks/database/mates/mates";
import DuoCard from './card/card'

import DuoFilter, { Filter } from "./filter";


export default function DuoIndex() {
  const [duoData,setDuoData] = useState([]);
  const filter = useSelector((state:Filter) => {
    return state.duoFilter
  })
  useEffect(()=>{
    console.log('이펙트')
    matesHook.get()
    .then((_res:any)=>{
      console.log('듀오',_res.data)
      setDuoData(_res.data)
    })
    .catch((_err)=>{
      alert('서버 오류 !')
    })
  },[])
  useEffect(()=>{
    console.log('듀오 데이터',duoData)
  },[duoData])
  function filterling(res:any){
    const {mode,line} = filter;
    // const tier = filter.tier.toUpperCase();
    // const soloRankValue = tierUtils.value(res.soloRank.tier);
    // const teamRankValue = tierUtils.value(res.teamRank.tier);
    // const resTier = soloRankValue > teamRankValue ? res.soloRank.tier : res.teamRank.tier;

    const is = {
      tier:false,
      mode:false,
      line:false
    }
    
    if(mode === res.mode || mode == 'All' || res.mode == 'All') is.mode = true;
    if(line === res.line || line == 'All' || res.line == 'All') is.line = true;
    // if(tier === resTier || tier == 'ALL') is.tier = true;
    
    return is.tier && is.mode && is.line
  }


  return (
    <Container>
      <Wrapper >
        <DuoFilter />
          <BoardLayOut>
            {duoData && duoData?.map((res:any)=>  <DuoCard key={res.id} duoRes={res} />  )}
          </BoardLayOut>
        </Wrapper>
        <style jsx global>{`
            body{
              background-image: url(https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt15d3facea57e5b7e/634613111338101198fce129/K_Sante-Base-Splash.jpg);
            }
          `}</style>
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



