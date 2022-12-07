import Script from "next/script";
import { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

type props = {
  text: string
}

function GoogleOauth({text}:props){

 
  


  return (
    <GoogleLogin>
      <Image src={'/images/path-icons/btn_google_signin_dark_normal_web@2x.png'} alt='googleLogin' layout="fill" objectFit="fill" />
    </GoogleLogin>
  )
  
}
const GoogleLogin = styled.div`
  position: relative;
  width: 313px;
  height: 80px;
  margin: 0 auto;
`;

export default GoogleOauth;