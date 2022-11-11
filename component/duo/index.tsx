import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { dbHook } from "../../hooks/dbHook";
import DuoFilter, { Filter } from "./filter/filter";

export default function DuoIndex(this: any) {
  const [duo,setDuo] = useState();
  const dispatch = useDispatch();
  const filter = useSelector((state:Filter) => {
    return state.duoFilter
  })

  useEffect(()=>{
    console.log("유즈 이펙트")
    dbHook.duo.get()
    .then((_res)=>{
      console.log("초기로드",_res)
    })
    .catch((_error)=>{
      console.log("초기로드 에러",_error)
    })
  },[])
  useEffect(()=>{
    console.log("필터 변경",filter)
  },[filter])
  

  return (
    <>
      <Container>
        <Wrapper >
          <DuoFilter />
            <BoardLayOut>
              {/* {duoRes && duoRes.map((res:any,index:number)=> optionSelect(res) ? <DuoRes key={index} duoRes={res} setDeleteState={setDeleteState} setDeletePw={setDeletePw} setDeleteId={setDeleteId} />  : null )} */}
            </BoardLayOut>
          </Wrapper>
      </Container>
      {/* {overlayMatch ? <DuoInput /> : null} */}
      {/* {deleteState ? <DuoDelete setDeleteState={setDeleteState} setMatchPw={setMatchPw} deletePw={deletePw}/> : null} */}
    </>
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



