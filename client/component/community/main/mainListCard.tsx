import Image from "next/image";
import styled from "styled-components";
import { timeHook } from "../../../hooks/timeHook";

export default function CommunityListCard({postData}:any){
  const {PostId,PostTitle,Content,CommunityName,UserName,CreateAt} = postData
  // console.log("포스트 데이터",postData)
  const date = new Date(CreateAt);
  const timeDiff = timeHook.otherDay(date.getTime())
  console.log(timeDiff)
  return (
    <Card>
      <Recommend>
        <span><Image src={`/images/public-icons/arrow-up.png`} alt="recommend" layout="fill" objectFit="cover" /></span>
        <div>XXX</div>
      </Recommend>
      <ContentWrap>
        <Title>{PostTitle}</Title>
        <Info>
          <div>{CommunityName}</div>
          <div>{timeDiff}</div>
          <div>{UserName}</div>
        </Info>
      </ContentWrap>
      <Thumbnail>
        <Image src={`/images/thumbnail-temp.png`} alt="thumbnail" layout="fill" objectFit="contain" />
      </Thumbnail>
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
  text-align: center;
  span{
    display: inline-block;
    position: relative;
    width: 16px;
    height: 16px;
  }
`;
const ContentWrap = styled.div`
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
const Thumbnail = styled.div`
  position: relative;
  display: table-cell;
  width: 20%;
  height: 100%;
  padding: 0 20px;
`;
