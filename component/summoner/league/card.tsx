import styled from "styled-components";


export default function LeagueCard({info,margin}:any){
  console.log("리그 정보",info,margin);
  
  return(
    <Card margin={margin} >
      
    </Card>
  )

}

const Card = styled.div<{margin:boolean}>`
  width: 100%;
  height: 8rem;
  background-color: #2c3e50;
  border-radius: 0.5rem;
  margin-bottom: ${props => props.margin ? "0.5rem":"0"}
`;