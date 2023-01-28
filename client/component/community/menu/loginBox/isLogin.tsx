import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components"
import { ReduxLoginType } from "../../../../redux/login/user";

type props ={
  user:ReduxLoginType
}

export default function CommunityIsLogin({user}:props){
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