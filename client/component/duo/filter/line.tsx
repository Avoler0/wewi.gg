

import styled from "styled-components"
import { options } from "../../../const/utils"
import { duoSetFilter } from "../../../redux/duo/filter"
import Image from "next/image"
export default function FilterLine({lineSelect,dispatch}:any){ // 듀오 카드 필터링 Line 부분


  return (
      <LineTypes onClick={(event:any)=>{dispatch(duoSetFilter({type:"line",value:event?.target.alt}))}}>
        {options.lines.map((line:string)=>{
          return (
            <LineItems bgColor={lineSelect === line ? "#7c7c83" : "#2c3e50"} key={line}>
              <Image src={`/images/line-icons/Line-${line}-Ico.png`} alt={line} layout="fill" objectFit="cover" />
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
`;
const LineItems = styled.li<{bgColor:any}>`
  position: relative;
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
