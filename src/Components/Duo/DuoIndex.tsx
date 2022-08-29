import { useEffect, useState } from "react";
import { useMatch, useNavigate  } from "react-router-dom";
import styled from "styled-components";
import { deleteDuoMate, getDuoMatching } from "../../api/riotApi";
import { Container, Wrapper } from "../../commons/sharingCss";
import DuoDelete from "./DuoModule/DuoDelete";
import DuoInput from "./DuoModule/DuoInput";
import DuoRes from "./DuoModule/DuoRes";
import {ReactComponent as Plus} from "/MyApp/wewi.gg/src/images/icons/plus-svgrepo-com.svg"

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
const GameSelect = styled.select`
  margin-right: 20px ;
  font-size: 15px ;
  border: 1px solid (66,66,84,0.8);
  background-color: #2c3e50;
  width: 6.5rem;
  height: 2.2rem;
  border-radius: 5px;
  color: rgba(123,122,142,1);
`;
const GameOption = styled.option`
 
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

  
`;
const LineItems = styled.li<{bgColor:any}>`
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
  const history = useNavigate();
  const overlayMatch = useMatch('/duo/addDuo');
  const [tierOption,setTierOption] = useState(0);
  const [duoOption,setGameOption] = useState(0);
  const [lineOption,setLineOption] = useState(0);
  const [deleteState,setDeleteState] = useState(false)
  const [deletePw,setDeletePw] = useState("0");
  const [matchPw,setMatchPw] = useState("1");
  const [deleteId,setDeleteId] = useState("0");



  const addDuoInput = () => {
    history("/duo/addDuo")
  };
  function selectGame (event:any) {
    const value = Number(event.target.value)
    setGameOption(value)
  }
  const lineSelect = (lineValue:string) => {
    const value = Number(lineValue)
    setLineChoice(lineValue)
    setLineOption(value)
  } 
  const selectTier = (event:any) => {
    const value = Number(event.target.value)
    setTierOption(value)
  }
  const [lineChoice,setLineChoice] = useState('AllLine');
  
  const [duoRes,setDuoRes] = useState<any>();
  const getDuoResData = () => {
    Promise.all([getDuoMatching()])
    .then(([fetchDuo]) => {
      const res = fetchDuo.data
      setDuoRes(res);
    })
  }
  useEffect(()=>{
    getDuoResData()
  },[])
  
  useEffect(()=>{
    console.log("듀오레스",duoRes);
    console.log(deleteState);
    
  },[duoRes])
    useEffect(()=>{
      console.log("매치비번",typeof matchPw , matchPw);
      console.log("삭제비번",typeof deletePw , deletePw);
    if(deletePw === matchPw){
      deleteDuoMate(deleteId)
    }
  },[deletePw,matchPw])
  const optionSelect = (data:any) => {
    const {Tier , DuoType , Line} = data;
    let tierB , duoB , lineB = false;
    if(Tier === tierOption || Tier === 0 ||tierOption === 0) tierB = true;
    else tierB = false;
    if(DuoType === duoOption || DuoType === 0 ||duoOption === 0) duoB = true;
    else duoB = false;
    if(Line === lineOption || Line === 0 ||lineOption === 0) lineB = true;
    else lineB = false;
    console.log("티어" ,tierB, "듀오" ,duoB, "라인" , lineB );
    
    return tierB && duoB && lineB ? true : false;
  }

  return (
    <>
      <Container>
        <Wrapper >
            <Filter>
              <Column>
                <GameFilter>
                  <GameSelect  defaultValue="0" onChange={selectGame}>
                    <GameOption value="0" selected>모두보기</GameOption>
                    <GameOption value="1">일반게임</GameOption>
                    <GameOption value="2" selected>솔로랭크</GameOption>
                    <GameOption value="3">자유랭크</GameOption>
                    <GameOption value="4">칼 바 람</GameOption>
                    <GameOption value="5">특별모드</GameOption>
                  </GameSelect>
                </GameFilter>
                <TierFilter>
                  <TierSelect defaultValue="0" onChange={selectTier}>
                    <TierOption value="0" selected>모두보기</TierOption>
                    <TierOption value="1">아이언</TierOption>
                    <TierOption value="2">브론즈</TierOption>
                    <TierOption value="3">실버</TierOption>
                    <TierOption value="4">골드</TierOption>
                    <TierOption value="5">플래티넘</TierOption>
                    <TierOption value="6">다이아</TierOption>
                    <TierOption value="7">마스터</TierOption>
                    <TierOption value="8">그랜드마스터</TierOption>
                    <TierOption value="9">챌린저</TierOption>
                  </TierSelect>
                </TierFilter>
                <LineTypes>
                  <LineItems onClick={() => lineSelect("0")} bgColor={lineChoice === "0" ? "#7c7c83" : "#2c3e50"}>
                    <img  src={`../images/icon/line/Line-All-Ico.png`} />
                  </LineItems>
                  <LineItems onClick={() => lineSelect("1")} bgColor={lineChoice === "1" ? "#7c7c83" : "#2c3e50"}>
                    <img src={`../images/icon/line/Line-Top-Ico.png`} />
                  </LineItems>
                  <LineItems onClick={() => lineSelect("2")} bgColor={lineChoice === "2" ? "#7c7c83" : "#2c3e50"}>
                    <img src={`../images/icon/line/Line-Jungle-Ico.png`} />
                  </LineItems>
                  <LineItems onClick={() => lineSelect("3")} bgColor={lineChoice === "3" ? "#7c7c83" : "#2c3e50"}>
                    <img src={`../images/icon/line/Line-Mid-Ico.png`} />
                  </LineItems>
                  <LineItems onClick={() => lineSelect("4")} bgColor={lineChoice === "4" ? "#7c7c83" : "#2c3e50"}>
                    <img src={`../images/icon/line/Line-Bottom-Ico.png`} />
                  </LineItems>
                  <LineItems onClick={() => lineSelect("5")} bgColor={lineChoice === "5" ? "#7c7c83" : "#2c3e50"}>
                    <img src={`../images/icon/line/Line-Support-Ico.png`} />
                  </LineItems>
                </LineTypes>
              </Column>
              <Column>
                <AddButton onClick={() => addDuoInput()}>등록</AddButton>
              </Column>
            </Filter>
            <BoardLayOut>
              {duoRes && duoRes.map((res:any,index:number)=> optionSelect(res) ? <DuoRes key={index} duoRes={res} setDeleteState={setDeleteState} setDeletePw={setDeletePw} setDeleteId={setDeleteId} />  : null )}
            </BoardLayOut>
          </Wrapper>
      </Container>
      {overlayMatch ? <DuoInput /> : null}
      {deleteState ? <DuoDelete setDeleteState={setDeleteState} setMatchPw={setMatchPw} deletePw={deletePw}/> : null}
    </>
  );
}

const Board = styled.div`
  position: relative;
  background-color: #2c3e50 ;
  width: 180px ;
  height: 180px;
  border-radius: 15px ;

`;



