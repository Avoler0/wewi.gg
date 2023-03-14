import styled from "styled-components"
import ProCard from "./card/card";



export default function ProGamer(){
  const pro_gamer = [
    { 
      nick:"hide on bush",
      team:"T1 Challengers",
      teamNick:"Faker"
    },
    {
      nick:"Asperrr",
      team:"T1 Challengers",
      teamNick:"Asper"
    },
    { 
      nick:"쭌 베",
      team:"T1 Challengers",
      teamNick:"Bay"
    },
    { 
      nick:"T1 Roach",
      team:"T1 Challengers",
      teamNick:"Roach"
    },
    { 
      nick:"baut12",
      team:"T1 Challengers",
      teamNick:"Baut"
    },
    { 
      nick:"T1 Trigger",
      team:"T1 Challengers",
      teamNick:"Trigger"
    },
    { 
      nick:"krats aira",
      team:"Rascal Jester",
      teamNick:"Ssol"
    },
  ]
  return (
    <Spectate>
      <List>
        {pro_gamer.map((gamer:any)=>{
          return <ProCard key={gamer.nick} gamer={gamer} />
        })}
      </List>
      
    </Spectate>
  )
}

const Spectate = styled.article`
  width: ${props => props.theme.windowSize.pc};
  margin: 0 auto;
  height: 50vh;

  background-color: rgb(27, 52, 71);
`;

const List = styled.div`
`;