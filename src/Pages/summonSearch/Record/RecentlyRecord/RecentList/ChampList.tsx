import { useEffect } from "react";
import styled from "styled-components";

function ChampList({champRecord}:any){
  
  // 배열 변수에 넣으면서 , 같은 이름이 있을 시에는 kda와 win만 넣기
  const soloLeague = [{}];
  const freeLeague = [{}];
  const recentChamp = [];
  useEffect(()=>{
    if(champRecord){
      console.log("챔프레코드",champRecord);
      champRecord.map((data:any)=>console.log(data)
      )
    }
    // const result = champRecord.filter((filterData:any,index:number)=> {
    //   return champRecord.findIndex((findData:any) => filterData.champ !== findData.champ) === index
    // })
    // console.log(result);
  },[champRecord])
  return (
    <RecordUl>

    </RecordUl>
  )
  
}
const RecordUl = styled.ul`

`;
const RecordLi = styled.li`
  margin: 5px;
  border: 1px solid white;
  height: 90px;
  display: flex;
  padding: 10px;
`;
export default ChampList