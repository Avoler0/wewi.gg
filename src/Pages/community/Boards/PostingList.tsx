import { useState } from "react";
import styled from "styled-components";
import { PostingItem, PostingItems } from "./BoardStyled";
function PostingList() {
  const postCount = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
  const [image,setImage] = useState(false);
  const [title,setTitle] = useState("게시글 제목");
  const [views,setViews] = useState(12);
  const [recommend,setRecommend] = useState(2);
  const [timeStamp,setTimeStamp] = useState(3);
  const [nickName,setNickName] = useState("스쿵씨");
  const post = {
    Image: image,
    Title:title,
    Views:views,
    Recommend:recommend,
    TimeStamp:timeStamp,
    NickName:nickName
  }
  return (
    <PostingItem>
      {postCount.map(()=> 
        <PostingItems>
          <Recommend>
            <RecoImg src={`../images/icon/icons/up-svgrepo-com.svg`} />
            <RecoCount>{post.Recommend}</RecoCount>
          </Recommend>
          <Content>
            <Title>{post.Title}</Title>
            <TimeStamp>{post.TimeStamp}<span>분 전</span></TimeStamp>
            <Views><img src={`../images/icon/icons/view-svgrepo-com.svg`}/>{post.Views}</Views>
            <NickName>{post.NickName}</NickName>
          </Content>
        </PostingItems>
      )}
      
    </PostingItem>
  );
}
const Recommend = styled.div`
  height: 100%; 
  padding: 5px;
  padding-left: 1.5rem;
  padding-right: 2rem;
  display: flex;
  font-size: 14px;
`;
const RecoImg = styled.img`
  margin-right: 4px;
`;
const RecoCount = styled.div`
  
`;
const Content = styled.div`
  padding: 5px;
  display: flex;
  max-width: 100%;
`;
const Title = styled.div`
  display: flex;
  overflow: hidden;
  vertical-align: top;
  line-height: 15px;
  font-size: 14px;
  word-break: break-all;
  width: 30rem;
  cursor: pointer;
`;
const TimeStamp = styled.div`

  span{
    
    padding: 0 3px 0 3px;
  }
  padding: 0 10px 0 10px;
`;
const Views = styled.div`
  display: flex;
  img{
    padding: 0 5px 0 4px;
    height: 100%;
    
  }
`;
const NickName = styled.div`
  padding-left: 25px;
`;
export default PostingList;