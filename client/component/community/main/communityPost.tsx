import Link from "next/link";
import styled from "styled-components"
import CommunityListCard from "./mainListCard";


export default function CommunityPost(){

  return (
    <PostWrap>
      <Post>
        <Header>
          <Title>안녕하세요 제목입니다.</Title>
          <Meta>
            <MetaLeftList>카테고리 몇분전 유저</MetaLeftList>
            <MetaRightList>조회 댓글 추천</MetaRightList>
          </Meta>
        </Header>
        <ContentWrap>
          <Content>
            <p>1234</p>
          </Content>
        </ContentWrap>
        <VoteBoxWrap>
          <VoteBox>
            <Vote>
              <button>업</button>
              <button>다운</button>
            </Vote>
          </VoteBox>
        </VoteBoxWrap>
      </Post>
    </PostWrap>
  )
}


const PostWrap = styled.div`
  position: relative;
  width: 728px;
`;
const Post = styled.div`
  border: 1px solid #cecdca;
  background-color: white;
`;
const Header = styled.div`
  padding: 24px 24px;
  border-bottom: 1px solid #ebeef1;
`;
const Title = styled.div`
  line-height: 36px;
  font-size: 24px;
  color: #1e2022;
  word-wrap: break-word;
  word-break: break-all;
  overflow: auto;
`;
const Meta = styled.div`
  margin-top: 9px;
  line-height: 17px;
  font-size: 14px;
  color: #7b858e;
  :after{
    content: "";
    display: block;
    clear: both;
  }
`;
const MetaLeftList = styled.div`
  float: left;
  div{
    display: inline-block;
    line-height: 18px;
    font-size: 14px;
  }
  a{
    line-height: 18px;
    font-size: 14px;
  }

`;
const MetaRightList = styled.div`
  float: right;
  div{
    display: inline-block;
    vertical-align: middle;
  }
  span{
    line-height: 17px;
    font-size: 14px;
  }

`;
const ContentWrap = styled.div`
  overflow: auto;
`;
const Content = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 24px 16px;
  line-height: 24px;
  font-size: 16px;
  color: #1e2022;
  word-wrap: break-word;
  word-break: break-word;
`;

const VoteBoxWrap = styled.div`
  border-top: 1px solid #ebeef1;
  border-bottom: 1px solid #ebeef1;
  text-align: center;
`;

const VoteBox = styled.div`
  padding: 12px 0;
`;

const Vote = styled.div`


  button{
    padding: 12px;
    min-width: 88px;
    line-height: 17px;
    font-size: 14px;
    height: 43px;
    color: #1e2022;
    margin-left: 8px;
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #dddfe4;
  }

  :first-child{
    margin-left: 0;
  }
`;