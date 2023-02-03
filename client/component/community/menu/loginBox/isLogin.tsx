import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components"
import { ReduxLoginType } from "../../../../redux/login/user";

type props ={
  user:ReduxLoginType
}

export default function CommunityIsLogin({user}:props){ // 로그인 일 시 왼쪽 메뉴 헤더부분에 띄워주는 컴포넌트
  const {email,id,nickName,oauth,state} = user;
  const router = useRouter()
  console.log(user)
  return(
      <LoginButton>
        {nickName}
        <Link href={`${router.query.commuName}/write`} legacyBehavior>
          글 쓰기
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