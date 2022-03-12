import React from "react";
import { useRoutes } from "react-router-dom";
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
const SearchWrap = styled.div`
  margin: 0 auto;
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
function Home() {
  const onSubmit= (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }
  const onClick = () => {
    console.log("클릭됨");
    
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
          
              <Form onSubmit={onSubmit}>
                <SearchLabel htmlFor="SearchInput">검색</SearchLabel>
                <SearchInput placeholder="소환사명" id="SearchInput"></SearchInput>
                <SearchButton onClick={onClick}>검색</SearchButton>
              </Form>
          
        </Bottom>
      </Wrapper>
    </Container>
  );
}

export default Home;