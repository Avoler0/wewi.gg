import Script from "next/script";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setRegisterOauth } from "../../../../redux/login/oauthReg";
import { dbHook } from "../../../../hooks/dbHook";
import { setLogin } from "../../../../redux/login/user";
import { useRouter } from "next/router";

type GoogleResponse = {
  clientId: string,
  client_id: string,
  credential: string
  select_by: string
}
function GoogleOauth(){
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(()=>{
    const googleScript = document.createElement('script');
    googleScript.src = 'https://accounts.google.com/gsi/client';
    document.head.appendChild(googleScript);
    
    googleScript.onload = () =>{
      window.google.accounts.id.initialize({
        client_id: '625687004788-5pv5rsjeqkel0arqfclrmco227f4ven1.apps.googleusercontent.com',
        callback: handleGoogleCallBack,
        ux_mode: 'popup',
        login_uri: 'http://localhost:3000/login',
      });
      window.google.accounts.id.renderButton(
        document.getElementById("google_id_login"),
        { 
          'type':'icon',
          'theme':'outline',
          'shape':'square',
          'size': "x-large", 
          'width': '300', 
          'height': '100',
          'longtitle': true,
          'login_uri' : 'redirect'
        }  // customization attributes
      );
      window.google.accounts.id.prompt();
    }
  },[])
  async function handleGoogleCallBack(response:GoogleResponse) {
    const base64Payload = response.credential.split('.')[1];
    const payload = Buffer.from(base64Payload, 'base64'); 
    const jwt_decoded = JSON.parse(payload.toString())

    const result = await dbHook.account.oauth.login({type:'google',email:jwt_decoded.email,key:jwt_decoded.sub});
    if(result.status === 200){
      dispatch(setLogin({
        type:result.data[0].type,
        email:result.data[0].email,
        nickName:result.data[0].nickName
      }));
    }else{
      dispatch(setRegisterOauth({type:'google',email:jwt_decoded.email}))
      router.push('/register')
    }
  }

return <GoogleLogin id="google_id_login" /> ;
}
const GoogleLogin = styled.div`
  /* display: none; */

`;

export default GoogleOauth;