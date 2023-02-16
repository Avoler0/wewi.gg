import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRegisterOauth } from "../../../../redux/login/oauthReg";
import { setLogin } from "../../../../redux/login/user";
import { useRouter } from "next/router";
import { accountHook } from "../../../../hooks/server/account/account";
declare global {
  interface Window {
    google: any;
  }
}
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
        login_uri: process.env.NEXT_PUBLIC_LOGIN_URL,
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
      }
    );
    
    window.google.accounts.id.prompt();
  }
  },[])

  async function handleGoogleCallBack(response:GoogleResponse) {
    const base64Payload = response.credential.split('.')[1];
    const payload = Buffer.from(base64Payload, 'base64'); 
    const jwt_decoded = JSON.parse(payload.toString())
    await accountHook.login({email:jwt_decoded.email,oauthType:'google',oauthToken:jwt_decoded.sub})
    .then((_res:any)=>{
      dispatch(setLogin({
        id:_res.data.Id,
        oauth:'google',
        email:_res.data.Email,
        nickName:_res.data.Name,
      }));
      router.push('/')
    })
    .catch((_error)=>{
      dispatch(setRegisterOauth({email:jwt_decoded.email,oauthType:'google',oauthToken:jwt_decoded.sub}))
      router.push('/register')
    })
    

  }

return <div id="google_id_login" /> ;
}

export default GoogleOauth;