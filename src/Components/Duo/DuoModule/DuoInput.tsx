import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled , {css} from "styled-components";
import { getSummonerGameInfo, getSummonerInfo, getSummonerLeagueInfo, postDuoMatching } from "../../../api/riotApi2";
import { customAsync } from "../../../commons/asyncUtils";
import { timeLimit } from "../../../commons/functionCollection";
import OverlayMessage from "../../OverlayMessage";

function DuoInput() {
  const history = useNavigate();
  const cardOut = () => {history("/duo"); window.location.reload()};
  const champion:string[] = []
  const [micToggle,setMicToggle] = useState(false);
  const [inputName , setInputName] = useState("");
  const [nameCheck, setNameCheck] = useState(false);
  const [inputContent , setInputContent] = useState("같이할 사람 구합니다 !");
  const [inputPassword , setInputPassword] = useState("");
  const [lineChoice,setLineChoice] = useState(0);
  const [gameChoice,setGameChoice] = useState(0);
  const [postState,setPostState] = useState({
    window: false,
    type: '',
    message: ''
  })
  const setState = (props:any) => { // Input post 성공 & 에러나면 메세지 띄우기 위한 함수
    setPostState({
        window:true,
        type:props.response.status,
        message:props.response.data.message
      })
  }
  const inputData = {
    Name:inputName,
    Content:inputContent,
    Password:inputPassword,
    GameType:gameChoice,
    LineType:lineChoice,
    IsMic:micToggle,
    Tier: 0,
    Win: 0,
    Lose: 0,
    Champion:champion,
    Icon: 0,
  }
  const lineSelect = (lineNum:number) => {
    setLineChoice(lineNum)
  }
  const gameSelect = (event:any) => {
    const gameType = Number(event.target.value)
    setGameChoice(gameType)
  }
  const onValid = (event:any) => { event.preventDefault();}
  const postData = () => {
    let postCheck = false
    if(dataCheck() === true){
      getSummonerInfo(inputData.Name).then(async (res)=>{
        if(res){
          console.log("성공");
          setNameCheck(true);
          const { id , puuid , name , profileIconId} = res.data.data;
          console.log(res.data.data);
          inputData.Icon = profileIconId;
          Promise.all([
            await customAsync(getSummonerLeagueInfo(id),1000),
            await customAsync(getSummonerGameInfo(puuid,0,3),1000),

          ]).then(async ([fetchLegue , fetchGame]:any)=>{
            const leagueInfo = fetchLegue.data.data
            const gameInfo = [fetchGame.data.matchDetails[0][0].info.participants[fetchGame.data.matchDetails[0][0].participantId].championName,
                              fetchGame.data.matchDetails[0][1].info.participants[fetchGame.data.matchDetails[0][1].participantId].championName,
                              fetchGame.data.matchDetails[0][2].info.participants[fetchGame.data.matchDetails[0][2].participantId].championName]
            if(inputData.GameType === 3){
              inputData.Win = leagueInfo[1].wins;
              inputData.Lose = leagueInfo[1].losses;
              inputData.Tier = leagueInfo[1].tier;
            }else{
              inputData.Win = leagueInfo[0].wins;
              inputData.Lose = leagueInfo[0].losses;
              inputData.Tier = leagueInfo[0].tier;
            }
            timeLimit(champion.push(gameInfo[0]),100)
            timeLimit(champion.push(gameInfo[1]),150)
            timeLimit(champion.push(gameInfo[2]),200)
            
            await postDuoMatching(inputData).then((res)=>{
                console.log("APi성공",res);
                setState(res)
            }).catch((error)=>{
              console.log("API 에러",error);
              console.log(error.response.status);
              
              setState(error)
            })   
            console.log(inputData);
            console.log();
            console.log(fetchGame.data.matchDetails[0][0].participantId);
            
            postCheck = true;
          })
        }
      }).catch(()=>{
        console.log("실패");
        setNameCheck(false)
        postCheck = false
      })
    }else if(dataCheck() === "nameValueError"){
      alert("소환사 명을 입력 해 주세요")
    }else if(dataCheck() === "passwordValueError"){
      alert("비밀번호를 4자리 입력 해 주세요")
    }
    
    
  }
  const dataCheck = () => {
    if(inputName.length > 2 && inputPassword.length === 4) return true
    else if(inputName.length < 2) return "nameValueError"
    else if(inputPassword.length !== 4) return "passwordValueError"
  }
  const MicOnOff = () => {
    setMicToggle((prev) => !prev)
  }
  
  return (
    <>
    <Overlay onClick={cardOut} />
    <Wrap>
      <Head>
        <CardName>소환사 등록하기</CardName>
        <Xbutton onClick={cardOut}>X</Xbutton>
      </Head>
      <Form onSubmit={(e) => onValid(e)}>
        <Label htmlFor="name" >소환사 명</Label>
          <Input onChange={(e:any) => setInputName(e.target.value)}/>
        <ColumnMiddle>
          <LineWrap>
            <Label>주 포지션</Label>
            <LineBox>
              <LineItem onClick={() => lineSelect(0)} bgColor={lineChoice === 0 ? "#7c7c83" : "#2c3e50"}>
                <img src={`../images/icon/line/Line-All-Ico.png`} />
              </LineItem>
              <LineItem onClick={() => lineSelect(1)} bgColor={lineChoice === 1 ? "#7c7c83" : "#2c3e50"}> 
                <img src={`../images/icon/line/Line-Top-Ico.png`} />
              </LineItem>
              <LineItem onClick={() => lineSelect(2)} bgColor={lineChoice === 2 ? "#7c7c83" : "#2c3e50"}>
                <img src={`../images/icon/line/Line-Jungle-Ico.png`} />
              </LineItem>
              <LineItem onClick={() => lineSelect(3)} bgColor={lineChoice === 3 ? "#7c7c83" : "#2c3e50"}>
                <img src={`../images/icon/line/Line-Mid-Ico.png`} />
              </LineItem>
              <LineItem onClick={() => lineSelect(4)} bgColor={lineChoice === 4 ? "#7c7c83" : "#2c3e50"}>
                <img src={`../images/icon/line/Line-Bottom-Ico.png`} />
              </LineItem>
              <LineItem onClick={() => lineSelect(5)} bgColor={lineChoice === 5 ? "#7c7c83" : "#2c3e50"}>
                <img src={`../images/icon/line/Line-Support-Ico.png`} />
              </LineItem>
            </LineBox>
          </LineWrap>
          <QueueType>
            <Label>큐 타입</Label>
            <TypeSelect defaultValue="0" onChange={gameSelect}>
              <TypeOption value={0}>모든게임</TypeOption>
              <TypeOption value={1}>일반게임</TypeOption>
              <TypeOption value={2}>솔로랭크</TypeOption>
              <TypeOption value={3}>자유랭크</TypeOption>
              <TypeOption value={4}>칼바람나락</TypeOption>
              <TypeOption value={5}>특별모드</TypeOption>
            </TypeSelect>
          </QueueType>
          <MicCheck>
             <Label>마이크</Label>
            <MicButton  micToggle={micToggle} onClick={MicOnOff}>
              {/* {onOff ? <MicCircle style={{left:"5px"}} /> : <MicCircle style={{right:"5px"}}/>} */}
              <MicCircle micToggle={micToggle} />
            </MicButton> 
          </MicCheck>
        </ColumnMiddle>
        <Label>메모</Label>
        <Input placeholder="같이할 사람 구합니다 !" onChange={(e:any) => setInputContent(e.target.value)} />
        <PassWord>
          <Label >삭제 비밀번호</Label>
          <Input placeholder="4자리 숫자로 입력 해 주세요" onChange={(e:any) => setInputPassword(e.target.value)}/>
        </PassWord>
        <ExitWrap>
          <CancelBt onClick={cardOut}>취소</CancelBt>
          <OkBt onClick={postData}>등록</OkBt>
        </ExitWrap>
      </Form>
    </Wrap>
    {postState.window && <OverlayMessage setPostState={setPostState} postState={postState}/> }
    </>
  );
}

export default DuoInput;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
`;
const Wrap = styled.div`
  position: absolute;
  width: 30rem;
  height: 28.4rem;
  background-color: #2c3e50;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
const Head = styled.div`
  padding: 14px 14px 8px 14px;
  display: flex;
  justify-content: space-between;
`;
const CardName = styled.h3`
  font-weight: bold;
  color: white;
`;

const Xbutton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  border-top: 1px solid black;
`;

const Label = styled.label`
  font-size: 12px;
  display: block;
  color: rgba(123,122,142,0.8);
  margin-bottom: 8px;
`;
const Input = styled.input`
  height: 2.5rem;
  font-size: 0.875rem;
  background-color: #28283b;
  color: white;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 5px;
  padding: 0.8rem;
  :focus,:active{
    outline: none;
  }
`;
const ColumnMiddle = styled.div`
  display: flex;
  padding: 8px 0 8px 0;
`;
const LineWrap = styled.div`
  padding: 0 15px 0 0;
`;
const LineBox = styled.ul`
  display: flex;
`;
const LineItem = styled.li<{bgColor:any}>`
  width: 2.2rem;
  height: 2.2rem;
  padding: 0.2rem;
  border: 1px solid rgba(66,66,84,0.8);
  color: white;
  cursor: pointer;
  background-color: ${(props) => props.bgColor};
  img{
    width: 100%;
  }
`;
const QueueType = styled.div`
  padding: 0 15px 0 15px;
`;
const TypeSelect = styled.select`
  width: 6.5rem;
  height: 2.5rem;
  background-color: #28283b;
  border: 1px solid rgba(0,0,0,0.2);
  color: white;
  font-size: 14px;
`;
const TypeOption = styled.option`
  
`;
const MicCheck = styled.div`
  margin-left: 15px;
`;
const MicButton = styled.button<{micToggle:boolean}>`
  position: relative;
  width: 64px;
  height: 32px;
  border-radius: 9999px;
  padding: 0;
  background-color: ${(props) => props.micToggle ? "#7c7c83": "#28283b"};
  cursor: pointer;
  border: none;
  :hover{
    background-color: #7c7c83;
  }
`;
const MicCircle = styled.span<{micToggle:boolean}>`
  position: absolute;
  background-color: white;
  width: 28px;
  height: 28px;
  top: 2px;
  left: 2px;
  border-radius: 50px;
  transition: all 0.2s ease-in;
  ${(props) => 
    props.micToggle &&
    css`
      transform: translateX(32px);
    `}

`;

const PassWord = styled.div`
  padding: 12px 0 12px 0;
`;
const ExitWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  
`;
const CancelBt = styled.button`
  width: 48%;
  height: 3.2rem;
  border: 0.08rem solid rgba(123,122,142,0.8);
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
`;
const OkBt = styled.button`
  width: 48%;
  height: 3.2rem;
  border: 0.08rem solid rgba(123,122,142,0.8);
  border-radius: 5px;
  background-color: #7c7c83;
  cursor: pointer;
`;