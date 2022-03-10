import styled from "styled-components";

const Container = styled.div`
  max-width: 1903px;
  min-width: 1200px ;
  margin: 0 auto ;
`;
const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const Layout = styled.div`
  display: flex;
`;
const Head = styled.div`
  width:100% ;
  height: 20vh ;
  padding-bottom: 48px;
`;
const Left = styled.div`
  background-color: black;
  width: 80%;
`;
const Right = styled.div`
  background-color: whitesmoke;
  width: 20%;
`;
const ReportBoard=styled.div`
  background-color: aqua;
`;
const ReBoardLabel = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  color: black;
  padding: 10px;
`;
const ReBoardPost = styled.div`
  width: 100%;
  height: 70px;
  background-color: blue;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  height: 20vh;
  background-color: red;
`;
const Middle = styled.div`
  width: 100%;
  height: 100vh;
  background-color: green;
`;
const Bottom = styled.div`
  width: 100%;
  height: 20vh;
  background-color: blue;
`;


const SummonerIcon = styled.div`
  height: 100%;
  width: 11vw;
  background-color: blue;
`;
function Record() {
  return (
    <Container>
      <Wrapper>
        <Head />
        <Layout>
          <Left>
            <Top>
              <SummonerIcon />
              <span>아이콘 소환사명 신고하기 새로고침</span>
            </Top>
            
            <Middle>

            </Middle>
            <Bottom>

            </Bottom>
          </Left>
          <Right>
            <ReportBoard>
              <ReBoardLabel>
                신고 현황 누적:0개
              </ReBoardLabel>
              <ReBoardPost>
                
              </ReBoardPost>
            </ReportBoard>
          </Right>
        </Layout>
      </Wrapper>
    </Container>
  );
}

export default Record;

{/*  */}