import styled from "styled-components"
import Image from "next/image";

export default function CommunityListCard(){

  return (
    <Card>
      <Recommend>
        <span><Image src={`/images/public-icons/arrow-up.png`} alt="line" layout="fill" objectFit="cover" /></span>
        <div>1234</div>
      </Recommend>
      <Content>
        <Title>제목입니다.</Title>
        <Info>
          <div>카테고리</div>
          <div>몇 시간 전</div>
          <div>유저 이름</div>
        </Info>
      </Content>
      <Thumnail>
        썸네일
      </Thumnail>
    </Card>
  )
}

const Card = styled.article`
  display: table;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #cecdca;
`;

const Recommend = styled.div`
  display: table-cell;
  width: 10%;
  background-color: red;
  text-align: center;
  span{
    display: inline-block;
    position: relative;
    width: 16px;
    height: 16px;
  }
`;

const Content = styled.div`
  display: table-cell;
  width: 70%;
`;
const Title = styled.div`
  vertical-align: center;
`;
const Info = styled.div`
  margin-top: 5px;
  color: #7b858e;
  div{
    font-size: 14px;
    display: inline-block;
    padding-left: 8px;
    &:first-child{
    padding-left: 0;
  }
  }
  
`;
const Thumnail = styled.div`
  display: table-cell;
  width: 20%;
  padding: 0 20px;
`;