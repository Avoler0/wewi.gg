import Script from "next/script";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setOauthEmail, setRegisterOauth } from "../../../../redux/login/oauthReg";
import OauthCustomBtn from "./customBtn";
import Link from "next/link";



function GoogleOauth(){
  const dispatch = useDispatch();
  const googleRef = useRef();

  const users = useSelector((state)=>{
    return state.oauthReg
  })
  console.log(users)
  useEffect(()=>{
    const googleScript = document.createElement('script');
    googleScript.src = 'https://accounts.google.com/gsi/client';
    document.head.appendChild(googleScript);
    
    googleScript.onload = () =>{
      window.google.accounts.id.initialize({
        client_id: '625687004788-5pv5rsjeqkel0arqfclrmco227f4ven1.apps.googleusercontent.com',
        callback: handleCredentialResponse,
        ux_mode: 'popup',
        login_uri: 'http://localhost:3000/login',
      });
      window.google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { 
          'type' :'icon',
          'theme':'outline',
          'shape':'square',
          'size': "large", 
          'width': '300', 
          'height': '80',
          'longtitle': true,
          'login_uri' : 'redirect'
        }  // customization attributes
      );
      window.google.accounts.id.prompt();
    }
  },[])
  function handleCredentialResponse(response) {
    console.log("구글리스폰스",response)
    console.log("Encoded JWT ID token: " + response.credential);
    var base64Payload = response.credential.split('.')[1]; //value 0 -> header, 1 -> payload, 2 -> VERIFY SIGNATURE
    var payload = Buffer.from(base64Payload, 'base64'); 
    var result = JSON.parse(payload.toString())
    console.log("리설트",result.email)
    dispatch(setRegisterOauth({
      type:'google',
      email:result.email
    }));
  }

return (
  <>
    <GoogleLogin id="buttonDiv" className="구글 로그인" ref={googleRef}></GoogleLogin> 
    {/* <Link href='/api/oauth/google'>구글 로그인</Link>  서버용 링크 버튼*/}
    {/* <OauthCustomBtn type='google' isHref='/api/oauth/google'/> */}

  </>
)
}
const GoogleLogin = styled.div`
  /* display: none; */

`;
const Btn = styled.button`
  display: flex;
  width: 300px;
  height: 45px;
  align-items: center;
  background-color: #ffffff;
  border: none;
  border-radius: 3px;
`;
const ImageWrap = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  flex: 0.2;
  .naverIcon{
    text-align: left;
  }
`;
const Text = styled.div`
  flex: 1;
  font-size: 17px;
  color: color;
  text-align: center;
`;
export default GoogleOauth;