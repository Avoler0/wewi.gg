import Link from "next/link";
import styled from "styled-components"


export default function CommunityNonLogin(){ // 비로그인 일 시 왼쪽 메뉴 헤더부분에 띄워주는 컴포넌트

  return(
      <LoginButton>
        <Link href='/login'>
          로그인
        </Link>
      </LoginButton>
  )
}

const LoginButton = styled.div`
  display: table-cell;
  a{
    display: block;
    text-align: center;
    padding: 11px 0 10px;
    line-height: 17px;
    font-size: 14px;
    border-color: #46cfa7;
    border-radius: 4px;
    background-color: #46cfa7;
    color: #fff;
  }
`;