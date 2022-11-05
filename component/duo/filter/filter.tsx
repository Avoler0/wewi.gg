import { log } from "console";
import React from "react";
import styled from "styled-components";

export default function DuoFilter(){
  const [gameSelect,setGameSelect] = React.useState();
  const [tierSelect,setTierSelect] = React.useState();
  function formChange(event:HTMLFormElement){
    const name = event.target.name;
    const value = event.target.value;

    if(name === 'gameTypes'){
      setGameSelect(value)
    }else if(name === 'gameTypes'){
      setTierSelect(value)
    }
  }

  const lineSelect = (lineValue:string) => {
    const value = Number(lineValue)
    // setLineChoice(lineValue)
    // setLineOption(value)
  } 
  const options = {
    game:[
      {value:"all",label:"모두보기"},
      {value:"normal",label:"일반게임"},
      {value:"solo",label:"솔로랭크"},
      {value:"team",label:"자유랭크"},
      {value:"aram",label:"칼 바 람"},
      {value:"special",label:"특별모드"},
    ],
    tier:[
      {value:"all",label:"모두보기"},
      {value:"iron",label:"아이언"},
      {value:"bronze",label:"브론즈"},
      {value:"silver",label:"실버"},
      {value:"gold",label:"골드"},
      {value:"platinum",label:"플레티넘"},
      {value:"diamond",label:"다이아"},
      {value:"master",label:"마스터"},
      {value:"grandmaster",label:"그랜드마스터"},
      {value:"challenger",label:"챌린저"},
    ],
      
  }

  return (
    <Filter>
    <Column>
          <SelectForm onChange={formChange}>
            <Select defaultValue="solo" name="gameTypes">
              {options.game.map(({value,label})=>{
                return <Option key={value} value={value}>{label}</Option>
              })}
            </Select>
            <Select defaultValue="gold" name="tierTypes">
              {options.tier.map(({value,label})=>{
                return <Option key={value} value={value}>{label}</Option>
              })}
            </Select>
          </SelectForm>
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

  :focus{
    border: none;
  }
`;
const Option = styled.option`
  margin-top: 1rem;
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