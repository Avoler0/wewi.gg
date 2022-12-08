import Script from "next/script";
import { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";



type props = {
  text: string
}

function GoogleOauth({text}:props){
 const useScript = (url:string, onload:any) => {
    const script = document.createElement('script');

    script.src = url;
    script.onload = onload;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
};
useEffect(()=>{
  const googleScript = document.createElement('script');
  googleScript.src = 'https://accounts.google.com/gsi/client';
  document.head.appendChild(googleScript);
  googleScript.onload = () =>{
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
    });
    window.google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { 'theme': "dark", 
      'size': "large", 
      'width': '300', 
      'height': '65',
      'longtitle': true,}  // customization attributes
    );
  }
},[])
function handleCredentialResponse(response) {
  console.log("Encoded JWT ID token: " + response.credential);
}

// return <div id="buttonDiv"></div> 
return (
  <GoogleLogin>
    <div id="buttonDiv" className="login-btn"></div> 
  </GoogleLogin>
)

}
const GoogleLogin = styled.div`


`;

export default GoogleOauth;