import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import styled from "styled-components";

const Home: NextPage = () => {
  const router = useRouter();
  function useSearchSubmit(event:any){
    router.push(`/summoner/${event.target.summoner.value}`)
    event.preventDefault()
  }
  return (
    <Container>
      <Wrapper style={{paddingTop:"50px"}}>
        <Top>
          <Banner>
            <BannerMemo>Wewi.gg</BannerMemo>
          </Banner>
        </Top>
        <Bottom>
              <Form onSubmit={useSearchSubmit}>
                <SearchLabel htmlFor="SearchInput" />
                <SearchInput name="summoner" placeholder="소환사명" ></SearchInput>
                <SearchButton >검색</SearchButton>
              </Form>
        </Bottom>
        {/* <RecommenWrap>
          <RecoName>
            <span>오늘의 추천</span>
          </RecoName>
          <Recommen>

          </Recommen>
        </RecommenWrap> */}
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 150px;  
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 792px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 568px;
  }
  @media (max-width: 767px){
	  width: 567px;
  }
`;
const Top = styled.div`
  display: flex;
  width: 100%;
  height: 7vw;
  margin-bottom: 50px;
`;
const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 auto;
`;
const BannerMemo = styled.div`
  font-size: 72px;
   color: white;
  font-weight: bold;
   -webkit-text-stroke: 1px #000;
  @media (min-width: 992px) and (max-width: 1199px) {
    font-size: 72px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 62px;
  }
  @media (max-width: 767px){
	  font-size: 52px;
  }
`;
const Bottom = styled.div`
  display: flex;
  width: 100%;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: white;
  border-radius: 2px;
`;
const SearchLabel = styled.label`
  font-size: 24px;
  width: 0;
  height: 0;
  top: 0;
  visibility: hidden;
`;
const SearchInput = styled.input`
  width: 500px;
  height: 50px;
  font-size: 18px;
  color: black;
  border: none;
  border-radius: 2px;
  :focus{
    outline: none;
  }
  ::placeholder{
   padding-left: 10px;
   :hover{
     padding: 0;
   }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 500px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 400px;
  }
  @media (max-width: 767px){
	  width: 300px;
  }
`;
const SearchButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  background-color: transparent;
  
`;
const RecommenWrap = styled.div`
  background-color: black;
  width: 100%;
  margin: 0 auto;
  @media (min-width: 767px) and (max-width: 1199px) {
    width: 80%;
  }

`;
const RecoName = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 50px;
  span{
    font-size: 48px;
    font-weight: 700;
    color: white;
  }
`;
const Recommen = styled.div`
  width: 100%;
  height: 40vh;
`;
export default Home
