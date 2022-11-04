import styled from "styled-components";

export default function DuoFilter(){
  function selectGame (event:any) {
    const value = Number(event.target.value)
    // setGameOption(value)
  }
  const lineSelect = (lineValue:string) => {
    const value = Number(lineValue)
    // setLineChoice(lineValue)
    // setLineOption(value)
  } 
  const selectTier = (event:any) => {
    const value = Number(event.target.value)
    // setTierOption(value)
  }
  return (
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
          {/* <LineItems onClick={() => lineSelect("0")} bgColor={lineChoice === "0" ? "#7c7c83" : "#2c3e50"}>
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
          </LineItems> */}
        </LineTypes>
      </Column>
      <Column>
        {/* <AddButton onClick={() => addDuoInput()}>등록</AddButton> */}
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