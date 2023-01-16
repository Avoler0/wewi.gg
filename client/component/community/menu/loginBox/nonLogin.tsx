import Link from "next/link";
import styled from "styled-components"


export default function CommunityNonLogin(){

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