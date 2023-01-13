import Link from "next/link";
import styled from "styled-components"
import CommunityListCard from "./mainListCard";


export default function CommunityMain(){

  return (
    <ContentMain>
      <SubHeader>
        <SubHeaderInfo>카테고리 이름</SubHeaderInfo>
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
        <CommunityListCard />
      </Content>
    </ContentMain>
  )
}


const ContentMain = styled.div`
  float: right;
  width: 728px;
  height: 700px;
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