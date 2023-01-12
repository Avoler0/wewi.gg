import styled from "styled-components";
import { searchMovePath } from "../../hooks/searchMovePath";



export default function MainSearch(){

  return (
    <SearchWrap>
      <SearchContainer>
        <Title>
          <Banner>
            <BannerMemo>Wewi.gg</BannerMemo>
          </Banner>
        </Title>
        <SearchForm onSubmit={searchMovePath}>
          <SearchLabel htmlFor="SearchInput" />
          <SearchInput name="search" placeholder="소환사명" ></SearchInput>
          <SearchButton >검색</SearchButton>
        </SearchForm>
      </SearchContainer>
    </SearchWrap>
  )
}

const SearchWrap = styled.article`
  width: 100%;
  height: 100%;
  background-image: url(https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt15d3facea57e5b7e/634613111338101198fce129/K_Sante-Base-Splash.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  padding: 5rem 0;

`;
const SearchContainer = styled.div`
  width: 1120px;
  margin: 0 auto;
  @media (min-width: 992px) and (max-width: 1120px) {
   max-width: 792px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    max-width: 568px;
  }
  @media (max-width: 767px){
	  max-width: 567px;
  }
`;
const Title = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
`;
const Banner = styled.h2`
  text-align: center;
  line-height: 60px;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
`;
const BannerMemo = styled.span`
  font-size: 72px;
  color: white;
   /* -webkit-text-stroke: 1px #000; */
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

const SearchForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 2px;
`;
const SearchLabel = styled.label`
  font-size: 24px;
  width: 0;
  height: 0;
  top: 0;
  visibility: hidden;
  background-color: white;
`;
const SearchInput = styled.input`
  width: 500px;
  height: 50px;
  font-size: 18px;
  color: black;
  border: none;
  padding-left: 15px;
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
  background-color: white;
`;