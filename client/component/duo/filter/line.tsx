

import styled, { css } from "styled-components"
import { options } from "../../../const/utils"
import { duoSetFilter } from "../../../redux/duo/filter"
import Image from "next/image"
export default function FilterLine({lineSelect,dispatch}:any){ // 듀오 카드 필터링 Line 부분


  return (
      <LineTypes onClick={(event:any)=>{dispatch(duoSetFilter({type:"line",value:event?.target.alt}))}}>
        {options.lines.map((line:string)=>{
          return (
            <LineItems key={line} select={lineSelect === line}>
              <Image src={`/images/line-icons/Line-${line}-Ico.png`} alt={line} layout="fill" objectFit="contain" />
            </LineItems>
          )
        })}
      </LineTypes>
  )
}

const LineTypes = styled.ul`
  display: flex ;
  margin: 0;
  list-style: none;
  border: 1px solid rgb(75, 75, 100);
  background-color: rgb(22, 43, 59);
  height: 100%;
`;
const LineItems = styled.li<{select:boolean}>`
  position: relative;
  width: 2.2rem;
  height: 100%;
  padding: 1rem;
  border: none;
  background-color: ${props => props.select ? '#768f79b3' : 'rgb(22, 43, 59)'};
  cursor: pointer;

  :hover{
    background-color: ${props => props.select ? '' : '#7c7c8339'};
  }
  
`;
