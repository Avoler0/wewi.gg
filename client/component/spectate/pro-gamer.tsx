import styled from "styled-components"
import ProCard from "./card/card";



export default function ProGamer(){
  const pro_gamer = [
    { 
      nick:"hide on bush",
      team:"T1 Challengers",
      teamNick:"Faker",
      id:"e43ND4nr4TzVcjQuGlETWhdGvgxDpqK1jIulQM6QJAjMCg"
    },
    {
      nick:"Asperrr",
      team:"T1 Challengers",
      teamNick:"Asper",
      id:"9mniHhv3z4gkC1jFGRwTpDBTYR4aBjtQGEX7BEmbs6_LrWU"
    },
    { 
      nick:"쭌 베",
      team:"T1 Challengers",
      teamNick:"Bay",
      id:"aSuFLGlWNmlnEM3FUqt9PRGCDiQgaRAzOYUQiHgUFToU3VM"
    },
    { 
      nick:"T1 Roach",
      team:"T1 Challengers",
      teamNick:"Roach",
      id:"gGtq9Zls_IUk5RErIWk_U4wa0HJnI9XrDOPI157wQtQT0Q"
    },
    { 
      nick:"baut12",
      team:"T1 Challengers",
      teamNick:"Baut",
      id:"5JA6zpOYIl3xdGenZnZXp2a7cuiCeAYqzCK9HfTxdQHqvG0"
    },
    { 
      nick:"T1 Trigger",
      team:"T1 Challengers",
      teamNick:"Trigger",
      id:"U8Zgipyw4GwWBLuph5soP95tVRJVVmW-1I-17D_KM0Py6vQ"
    },
    { 
      nick:"krats aira",
      team:"Rascal Jester",
      teamNick:"Ssol",
      id:"Sg9EMnc1PBXWwFb4lMf_Wq-kTkoEXfH1IIIe8vHBtxEoFLM"
    },
    { 
      nick:"파푸니카주민",
      team:"Progamer",
      teamNick:"Clowz",
      id:"Y9QhxHyqBkHBnz6Df4BI8RsV63izivko0jgMmlmjd-E-VDc"
    },
    { 
      nick:"Creative Self",
      team:"Progamer",
      teamNick:"Piglet",
      id:"YXy2B3uAhCsgv_zz7u0nrfUggWCxwV3oAmRsiNdqW_qKYw"
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