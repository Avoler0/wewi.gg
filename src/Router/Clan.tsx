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
const Head = styled.div`
  width:100% ;
  height: 20vh ;
  padding-bottom: 48px;
`;
const Filter = styled.div`
  display: flex ;
`;
const Select = styled.select`

`;

const Option = styled.option`

`;
const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr) ;
  grid-gap: calc(15px);
`;
const ClanBoard = styled.div`
  width : 15vw;
  height: 7vw;
  border-radius: 15px;
  background-color: red;
`;
const BoardTop= styled.div`
  background-color: blue;
  padding: 5px;
  height: 65%;
`;
const BoardBanner = styled.div`
  
`;
const BoardBottom = styled.div`
  background-color: green;
  padding: 5px;
  height: 35%;
`;
function Clan() {
  return (
    <Container>
      <Wrapper>
        <Head />
        <Filter>
        </Filter>
        <BoardWrapper>
          {[1,2,3,4,5,6,7,8,9,1,2,3].map((board) => (
            <ClanBoard>
            <BoardTop>
              <BoardBanner>Banner</BoardBanner>
            </BoardTop>
            <BoardBottom>

            </BoardBottom>
          </ClanBoard>
          ))}
        </BoardWrapper>
      </Wrapper>
    </Container>
  );
}

export default Clan;