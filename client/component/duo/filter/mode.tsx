import styled from "styled-components"
import { options } from "../../../const/utils"
import { duoSetFilter } from "../../../redux/duo/filter"

export default function FilterMode({dispatch}:any){ // 듀오 카드 필터링 Mode(큐 타입) 부분


  return (
      <Select defaultValue="solo" name="gameMode" onChange={(event)=>{dispatch(duoSetFilter({type:"mode",value:event?.target.value}))}}>
        {options.game.map(({value,label})=>{
          return <Option key={value} value={value}>{label}</Option>
        })}
      </Select>
  )
}

const Select = styled.select`
  background-color: rgb(22, 43, 59);
  width: 6.5rem;
  height: 100%;
  padding: 0.2rem;
  font-size: .925rem;
  color: #ece5e5;
  border: none;
`;

const Option = styled.option`
  border-radius: 0;
  margin-top: 1rem;
`;