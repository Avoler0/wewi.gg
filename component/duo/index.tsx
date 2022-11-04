import { useEffect, useState } from "react";
import styled from "styled-components";
import DuoFilter from "./filter/filter";


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
export default function DuoIndex(this: any) {
  const [tierOption,setTierOption] = useState(0);
  const [duoOption,setGameOption] = useState(0);
  const [lineOption,setLineOption] = useState(0);
  const [deleteState,setDeleteState] = useState(false)
  const [deletePw,setDeletePw] = useState("0");
  const [matchPw,setMatchPw] = useState("1");
  const [deleteId,setDeleteId] = useState("0");





  const [lineChoice,setLineChoice] = useState('AllLine');
  
  const [duoRes,setDuoRes] = useState<any>();
  const getDuoResData = () => {
    Promise.all([getDuoMatching()])
    .then(([fetchDuo]) => {
      const res = fetchDuo.data
      setDuoRes(res);
    })
  }
  // useEffect(()=>{
  //   getDuoResData()
  // },[])
  
  // useEffect(()=>{
  //   console.log("듀오레스",duoRes);
  //   console.log(deleteState);
    
  // },[duoRes])
  //   useEffect(()=>{
  //     console.log("매치비번",typeof matchPw , matchPw);
  //     console.log("삭제비번",typeof deletePw , deletePw);
  //   if(deletePw === matchPw){
  //     deleteDuoMate(deleteId)
  //   }
  // },[deletePw,matchPw])
  // const optionSelect = (data:any) => {
  //   const {Tier , DuoType , Line} = data;
  //   let tierB , duoB , lineB = false;
  //   if(Tier === tierOption || Tier === 0 ||tierOption === 0) tierB = true;
  //   else tierB = false;
  //   if(DuoType === duoOption || DuoType === 0 ||duoOption === 0) duoB = true;
  //   else duoB = false;
  //   if(Line === lineOption || Line === 0 ||lineOption === 0) lineB = true;
  //   else lineB = false;
  //   console.log("티어" ,tierB, "듀오" ,duoB, "라인" , lineB );
    
  //   return tierB && duoB && lineB ? true : false;
  // }

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
const Board = styled.div`
  position: relative;
  background-color: #2c3e50 ;
  width: 180px ;
  height: 180px;
  border-radius: 15px ;

`;



