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
            <Column>
              <Title>{post.Title}</Title>
            </Column>
            <Column style={{
              display:"flex",
              marginTop:"10px"
            }}>
              <MenuType>유머</MenuType>
              <TimeStamp>{post.TimeStamp} 분 전</TimeStamp>
              <Views><img src={`../images/icon/icons/view-svgrepo-com.svg`}/>{post.Views}</Views>
              <NickName>
                <img src={`../images/icon/icons/user-svgrepo-com.svg `} />{post.NickName}</NickName>
            </Column>
          </Content>
        </PostingItems>
      )}
      
    </PostingItem>
  );
}
const Recommend = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%; 
  padding: 5px;
  padding-left: 1.5rem;
  padding-right: 2rem;
  font-size: 14px;
`;
const RecoImg = styled.img`
  width: 22px;
  
  margin: 0 auto;
`;
const RecoCount = styled.div`
  margin-top: 5px;
  text-align: center;
`;
const Content = styled.div`
  padding: 5px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
`;
const Column = styled.div`
  font-size: 14px;
  text-align: right;
`;
const Title = styled.div`
  display: flex;
  overflow: hidden;
  vertical-align: top;
  line-height: 15px;
  font-size: 14px;
  width: 30rem;
  color: whitesmoke;
  cursor: pointer;
`;
const MenuType = styled.div`
  
  
`;
const TimeStamp = styled.div`
  padding-left: 8px;
  width: 68px;
  height: 16px;
`;
const Views = styled.div`
  display: flex;
  padding-left: 12px;
  width: 68px;
  img{
    width: 18px;
    height: 80%;
    margin-right: 5px;
  }
`;
const NickName = styled.div`
  padding-left: 15px;

  img{
    margin-right: 5px;
    width: 22px;
    height: 80%;
  }
`;
export default PostingList;