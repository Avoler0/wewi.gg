

import styled from "styled-components"
import { options } from "../../../const/utils"
import { duoSetFilter } from "../../../redux/duo/filter"

export default function FilterTier({dispatch}:any){


  return (
      <Select defaultValue="gold" name="tierTypes" onChange={(event)=>{dispatch(duoSetFilter({type:"tier",value:event?.target.value}))}}>
        {options.tier.map(({value,label})=>{
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