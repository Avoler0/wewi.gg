import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRegisterOauth } from "../../../../redux/login/oauthReg";
import { setLogin } from "../../../../redux/login/user";
import { useRouter } from "next/router";
import { accountHook } from "../../../../hooks/server/account/account";
import { jwtTokenDecode } from "../../../../hooks/jwtToken";
import { setToken } from "../../../../redux/login/token";
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
        callback:handleGoogleCallBack,
        ux_mode: 'popup',
        redirect_uri: `${process.env.NEXT_PUBLIC_URL}/account/login/oauth/google`,
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

    const payload = jwtTokenDecode(response.credential)
    await accountHook.oauthLogin({email:payload!.email,type:'google'})
    .then((_res:any)=>{
      const token = _res.data.token;
      dispatch(setToken({
        token:token
      }));

      window.location.href = '/'
    })
  }

return <div id="google_id_login" /> ;
}

export default GoogleOauth;