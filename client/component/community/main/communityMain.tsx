import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { CommunityQueryName } from "../../../const/community";
import { postsHook } from "../../../hooks/server/posts/posts";
import CommunityListCard from "./mainListCard";

function CommunityMain(){ // 커뮤니티 메인 부분 
  const [postsList,setPostsList] = useState([]);
  const router = useRouter();
  const routerCommu:string = router.query.commuName as string;
  const commuName:string = router.query.commuName as string && CommunityQueryName.eng[routerCommu+'']

  useEffect(()=>{
    if(commuName){
      postsHook.get.list(commuName) // 커뮤니티 메인에 접속 시, 전체 커뮤니티를 불러옴
      .then((_res:any)=>{
        const resData = _res.data
        setPostsList(resData)
      })
      .catch((_err:any)=>{
      })
    }
  },[commuName])

  if(!postsList) return <div>불러오는 중...</div>

  return (
    <ContentMain>
      <SubHeader>
        <SubHeaderInfo>{commuName}</SubHeaderInfo>
        <SubHeaderMenu>
          <li>
            <Link href={'/community?sort=popular'}>
              인기
            </Link>
          </li>
          <li>
            <Link href={'/community'}>
              최신
            </Link>
          </li>
          <li>
            <Link href={'/community?sort=10'}>
              10추
            </Link>
          </li>
        </SubHeaderMenu>
      </SubHeader>
      <Content>
        {postsList && postsList.map((data:any)=>{
          return (
            <React.Fragment key={data.PostId}>
              <CommunityListCard postData={data}/>
            </React.Fragment>
          )
        })}
      </Content>
    </ContentMain>
  )
}
export default React.memo(CommunityMain)

const ContentMain = styled.div`
  position: sticky;
  width: 728px;
  height: 100%;
`;

const SubHeader = styled.div`
  background-color: white;
  border: 1px solid #cecdca;
`;

const SubHeaderInfo = styled.h2`
  font-size: 18px;
  padding-left: 15px;
`;
const SubHeaderMenu = styled.ul`
  color: #7b858e;
  li{
    display: inline-block;
    padding-left: 15px;
    a{
      display: inline-block;
      padding: 10px 2px 14px;
    }
  }
`;

const Content = styled.section`
  width: 100%;
  height: 700px;
  margin-top: 10px;
  background-color: white;
  border: 1px solid #cecdca;
`;