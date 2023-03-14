import styled from "styled-components"
import VideoSvg from '../../../public/images/public-icons/video.svg'


export default function ProCard({nickName}:any){


  return (
    <Card>
      <Content>
        <Team>
          <div>
            <span>

            </span>
          </div>
          <div>
            <div>T1 Challengers</div>
            <div>닉네임 부분</div>
          </div>
        </Team>
        <GameType>
            솔로랭크
        </GameType>
        <NickName>{nickName}</NickName>
        <Profile_Icon>

        </Profile_Icon>
        <User_Info>
          <span>그랜드마스터</span>
          <span>338LV</span>
        </User_Info>
        
          <Spectate>
            <div>
              <div>
                <VideoSvg />
                <span>13:11</span>
              </div>
              <button>관전하기</button>
            </div>
          </Spectate>
        
      </Content>
    </Card>
  )
}


const Card = styled.div`
  /* width: calc(25% - 6px); */
  font-size: .825rem;
  padding: .225rem;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Team = styled.div`
  width: 15%;
  display: flex;
  span{
    display: inline-block;
    width: 30px;
    height: 30px;
    background-color: red;
    margin-right: 1rem;
  }
  margin-right: .5rem;
`;
const GameType = styled.div`
  align-items: center;
`;

const Profile_Icon = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: red;
  margin-right: 2rem;
`;

const NickName = styled.div`
  width: 30%;
  margin: 0 .825rem;
  font-size: 0.925rem;
  font-weight: 700;
  text-align: center;
`

const User_Info = styled.div`
  font-size: .825rem;
  margin-right: 1rem;
  span{
    display: inline-block;
    &:first-child{
      margin-right: .5rem;
    }
  }
  
  
`;

const Spectate = styled.div`
  position: absolute;
  display: flex;
  right: 2rem;

  svg{
    margin-right: 1rem;
  }
  span{
    margin-right: 1rem;
  }
  div{
    &:first-child{
      display: flex;
      align-items: center;
    }
  }
  button{
    background-color: transparent;
    border: 1px solid #595c5f;
    color: #fff;
    padding: .2rem 1rem;
  }
`;

const SpectateBtn = styled.div`
`;