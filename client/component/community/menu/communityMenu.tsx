import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components"
import { CommunityMenuList, CommunityQueryName } from "../../../const/community";
import CommunityLoginBox from "./communityLoginBox";


export default function CommunityMenu(){ // 왼쪽 메뉴 부분 컴포넌트
  return (
    <Menu>
      <MenuHeader>
        <CommunityLoginBox />
      </MenuHeader>
      {CommunityMenuList.map((data:any)=>{
        return (
          <SidebatMenu key={data.category}>
            <Category >{data.category}</Category>
            <Division>
              {data.division.map((name:string)=>{
                return (
                <li key={data.category+' '+name}>
                  <Link href={`/community/${CommunityQueryName.kor[name]}`}>{name}</Link>
                </li>)
              })}
            </Division>
          </SidebatMenu>
        )
      })}
    </Menu>
  )
}


const Menu = styled.div`
  display: inline-block;
  width: 300px;
  height: 100%;
  background-color: white;
  border: 1px solid #cecdca;
`;
const MenuHeader = styled.div`
  padding: 16px;
`;
const SidebatMenu = styled.div`
  border-top: 1px solid #ebeef1;
  padding: 9px 16px 8px;
`;
const Category = styled.div`
  color: #7b858e;
  font-size: 12px;
`;

const Division = styled.ul`

  li{
    line-height: 17px;
    font-size: 14px;
    color: #1e2022;
    border-radius: 4px;
    :hover{
      background: #f8f9fa;
    }
    a{
      display: block;
      padding: 8px 12px 7px;
    }
  }
`;