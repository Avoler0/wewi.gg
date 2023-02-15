import styled from "styled-components"
import Image from "next/image";

function Summoner404Page(){
  return (
    <Wrap>
      <Container>
        <ImageWrap>
          <Image src={'/images/summoner-404.png'} alt="404" layout="fill" width={100} height={100} objectFit="contain"/>
        </ImageWrap>
        <Text404>
          찾을 수 없는 소환사 이름입니다.
          <span>HTTP 404</span>
        </Text404>
      </Container>
    </Wrap>
  )
}

export default Summoner404Page

const Wrap = styled.div`
  width: 100%;
  margin-top: 20vh;
`;
const Container = styled.div`
  width: 50%;
  margin: 0 auto;
`;
const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 15rem;
`;
const Text404 = styled.div`
  margin-top: 3vh;
  text-align: center;
  font-size: 3rem;
  span{
    display: block;
    color: #c2bfbf;
  }
`;