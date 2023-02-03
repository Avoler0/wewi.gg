import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { postsHook } from "../../../hooks/database/posts/posts";
import { timeHook } from "../../../hooks/timeHook";
import { PostType } from "../../../types/dbType";


export default function CommunityPost(){ // 특정 Post 클릭하여 서버에서 받아와 화면에 띄워주는 컴포넌트
  const [postsDataValid,setPostsDataValid] = useState(false);
  const [postsData,setPostsData] = useState<PostType | null>(null);
  const router = useRouter();
  const { postId } = router.query;
  useEffect(()=>{
    if(postId){
      (async ()=>{
        await postsHook.get.listById(postId) // 특정 post id를 기반으로 서버에서 데이터를 받아옴
        .then(async (res)=>{
          const resData = res.data[0];
          if(resData){
            setPostsDataValid(true);
            setPostsData(resData)
          }
          await postsHook.update.view(postId)
        })
      })()
    }
  },[postId])
  
  useEffect(()=>{
    if(postsData){
      const Content = document.querySelector('#content')
      if(Content){
        Content.innerHTML = postsData?.Content;
      }
    }
  },[postsData])

  function deleteBtnClick(){
    postsHook.delete(postId)
    .then((_res)=>{
      router.push('/community')
    })
  }
  if(!postsDataValid) <div></div>

  return (
    <PostWrap>
      <Post>
        <Header>
          <Title>{postsData?.PostTitle}</Title>
          <PostStateForm onSubmit={(event) => event.preventDefault()}>
            <button id="h" name="수정" type="submit">
            수정
            </button>
            <button onClick={deleteBtnClick}>
              삭제
            </button>
          </PostStateForm>
          <Meta>
            <MetaLeftList>
              <div>{postsData?.CommunityName}</div>
              <div>{postsData?.CreateAt && timeHook.otherDay(new Date(postsData?.CreateAt).getTime())}</div>
              <div>{postsData?.UserName}</div>
            </MetaLeftList>
            <MetaRightList>
              <div>조회 {postsData?.View}</div>
              <div>추천 {postsData?.Good ?? 0}</div>
            </MetaRightList>
          </Meta>
        </Header>
        <ContentWrap>
          <Content>
            <p id="content">{postsData?.Content}</p>
          </Content>
        </ContentWrap>
        <VoteBoxWrap>
          <VoteBox>
            <Vote>
              <button onClick={()=>{postsHook.update.voteGood(postsData?.PostId)}}>
                <span className="vote up">추천</span>
                <span>{postsData?.Good ?? 0}</span>
              </button>
              <button onClick={()=>{postsHook.update.voteBad(postsData?.PostId)}}>
                <span className="vote down">비추천</span>
                <span>{postsData?.Bad ?? 0}</span>
              </button>
              
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
  display: inline-block;
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
    vertical-align: middle;
    position: relative;
    margin-left: 8px;
    padding-left: 9px;
    border-left: 1px solid #ebeef1;
    :first-child{
      margin:0;
      padding: 0;
      border: none;
    }
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
    position: relative;
    margin-left: 8px;
    padding-left: 9px;
    border-left: 1px solid #ebeef1;
    :first-child{
      margin:0;
      padding: 0;
      border: none;
    }
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
  img{
    margin: 4px 0 10px;
    box-sizing: border-box;
    vertical-align: top;
    max-width: 100%;
    width: auto;
    height: auto;
  }
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
  .vote{
    width: 16px;
    height: 16px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: 16px;
    line-height: 999px;
    vertical-align: top;
    overflow: hidden;
    display: inline-block;
    margin-top: 1px;
    transition: all .5s;
  }
  
  .vote.up{
    background-image: url(/images/public-icons/arrow-up.png);
  }
  .vote.down{
    background-image: url(/images/public-icons/arrow-down.png);
  }
  :first-child{
    margin-left: 0;
  }
`;
const PostStateForm = styled.form`
  float: right;
  margin-top: 5px;
  margin-right: 10px;

  button{
    border: none;
    background-color: transparent;
  }
`;