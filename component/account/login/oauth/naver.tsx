import Script from "next/script";
import { useEffect } from "react";
import styled from "styled-components";

type props = {
  text: string
}

function NaverAouth({text}){

  useEffect(()=>{
      let naver_id_login = new window.naver_id_login('NR61LLLoBLU2vcfbHvDY','http://localhost:3000/register')
      var state = naver_id_login.getUniqState();
      naver_id_login.setButton('green',3,65)
      naver_id_login.setDomain('http://localhost:3000')
      naver_id_login.setState(state);
      
      naver_id_login?.init_naver_id_login();
  })
  


  return <NaverLogin id='naver_id_login'>{text}</NaverLogin>
  
}
const NaverLogin = styled.div`
  text-align:center;
  padding: 10px;
`;

export default NaverAouth;