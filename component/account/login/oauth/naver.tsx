import Script from "next/script";
import { useEffect } from "react";
import styled from "styled-components";

type props = {
  text: string
}

function NaverAouth({text}:props){

  useEffect(()=>{
      let naver_id_login = new window.naver_id_login('NR61LLLoBLU2vcfbHvDY','http://localhost:3000/login')
      var state = naver_id_login.getUniqState();
      naver_id_login.setButton('green',3,65)
      naver_id_login.setDomain('http://localhost:3000')
      naver_id_login.setState(state);
      
      naver_id_login?.init_naver_id_login();
  })
  


  return <div id='naver_id_login' className="login-btn">{text}</div>
  
}
const NaverLogin = styled.div`
`;

export default NaverAouth;