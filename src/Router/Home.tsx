import { Link } from "react-router-dom";
import styled from "styled-components";
import {useForm} from "react-hook-form"

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
  height: 10vh ;
  padding-bottom: 48px;
`;
const Top = styled.div`
  display: flex;
  background-color: red;
  width: 100%;
  height: 7vw;
  margin-bottom: 50px;
`;
const Banner = styled.div`
  display: flex;
  background-color: blue;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 auto;
`;
const BannerMemo = styled.div`
  font-size: 48px;
  font-weight: 700;
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
  
`;
const SearchButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;
const RecommenWrap = styled.div`
  background-color: black;
  width: 100%;
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

function Home() {
  const {register,watch} = useForm();
  const summonWatch = watch("SummonerSearch");
  const onValid = (data:any) => {
    // setName(data.SummonerSearch)
    
    
  }
  return (
    <Container>
      <Wrapper>
        <Head />
        <Top>
          <Banner>
            <BannerMemo>우리 같이 할래 ?</BannerMemo>
          </Banner>
        </Top>
        <Bottom>
              <Form >
                <SearchLabel htmlFor="SearchInput">검색</SearchLabel>
                <SearchInput {...register("SummonerSearch" , {required:true , minLength:{
                  value:1,
                  message: "두글자 이상의 소환사명을 입력하세요"
                }})}  placeholder="소환사명" id="SearchInput"></SearchInput>
                  <Link to={`/duo/${summonWatch}`}>
                    <SearchButton >검색</SearchButton>
                  </Link>
              </Form>
        </Bottom>
        <RecommenWrap>
          <RecoName>
            <span>오늘의 추천</span>
          </RecoName>
          <Recommen>

          </Recommen>
        </RecommenWrap>
      </Wrapper>
    </Container>
  );
}

export default Home;
