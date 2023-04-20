import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { matesHook } from "../../hooks/server/mates/mates";
import DuoCard2 from "./card/card2";

import DuoFilter, { Filter } from "./filter";


export default function DuoIndex() { // 듀오 구인 Page 인덱스 부분
  const [duoData,setDuoData] = useState([]);
  const filter = useSelector((state:Filter) => {
    return state.duoFilter
  })
  useEffect(()=>{
    matesHook.get() // 듀오 구인 Page 화면에 표시되면 Server에서 듀오 구인 게시글 리스트 받아옴
    .then((_res:any)=>{
      setDuoData(_res.data)
    })
    .catch((_err)=>{
      alert('서버 오류 !')
    })
  },[])

  return (
    <Container>
      <Wrapper >
        <DuoFilter />
        <ColumName>
            <div style={{width:'16%'}}>소환사 이름</div>
            <div style={{width:'7%'}}>포지션</div>
            <div style={{width:'8%', textAlign:'center'}}>티어</div>
            <div style={{width:'15%', textAlign:'right'}}>최고 숙련 챔피언</div>
            <div style={{width:'10%', textAlign:'right'}}>승률</div>
            <div style={{width:'14%', textAlign:'right'}}>KDA</div>
            <div style={{width:'20%', textAlign:'right', paddingRight:'3.7rem'}}>메모</div>
            <div style={{width:'10%', textAlign:'right'}}>등록일시</div>
          </ColumName>
        <BoardLayOut>
          {duoData && duoData?.map((res:any)=>  <DuoCard2 key={res.Id} duoRes={res} filter={filter} />  )}
        </BoardLayOut>
        </Wrapper>
    </Container>
  );
}


const Container = styled.div`
  width: 100%;
  height: 1000px;
`;

const Wrapper = styled.div`
  width: ${props => props.theme.windowSize.pc};
  margin: 0 auto;
  
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
  display:flex ;
  flex-direction: column;
  background-color: rgb(22, 43, 59);
  /* padding: .525rem; */
  /* @media (max-width: 1199px) {
    grid-template-columns: repeat(4,1fr) ;
    grid-gap: calc(20px);
  }
  @media (max-width: 995px) {
    grid-template-columns: repeat(3,1fr) ;
    grid-gap: calc(15px);
  }
  @media (max-width: 572px){
    grid-template-columns: repeat(2,1fr) ;
  } */
`;
const ColumName = styled.div`
  display: flex;
  background-color: rgb(17, 32, 44);
  font-size: .825rem;
  div{
    padding: .525rem;
  }
`;
const Board = styled.div`
  position: relative;
  background-color: #2c3e50 ;
  width: 180px ;
  height: 180px;
  border-radius: 15px ;

`;



