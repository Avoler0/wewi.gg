import styled from "styled-components"
import { options } from "../../../const/utils"
import { duoSetFilter } from "../../../redux/duo/filter"

export default function FilterMode({dispatch}:any){


  return (
      <Select defaultValue="solo" name="gameMode" onChange={(event)=>{dispatch(duoSetFilter({type:"mode",value:event?.target.value}))}}>
        {options.game.map(({value,label})=>{
          return <Option key={value} value={value}>{label}</Option>
        })}
      </Select>
  )
}

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
`;

const Option = styled.option`
  margin-top: 1rem;
`;