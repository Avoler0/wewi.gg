import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLogin } from "../../../../redux/login/user";
import { setRegisterOauth } from "../../../../redux/login/oauthReg";
import { accountHook } from "../../../../hooks/server/account/account";
declare global {
  interface Window {
    naver_id_login: any;
  }
}

function NaverAouth(){
  const router = useRouter();
  const dispatch = useDispatch();

  function initNaverOauth(){
    const naver_id_login = new window.naver_id_login('NR61LLLoBLU2vcfbHvDY','http://localhost:3000/login')
    const state = naver_id_login.getUniqState();
    naver_id_login.setButton('green',0,40)
    naver_id_login.setDomain('http://localhost:3000')
    naver_id_login.setState(state);
    naver_id_login?.init_naver_id_login();
  }

  async function handleNaverCallBack(){
    if(router.asPath !== '/login'){
      const token_parameter = router.asPath.split('=')[1].split('&')[0];
      await accountHook.naverOauthApi(token_parameter)
      .then(async (_res:any)=>{
        await accountHook.login({email:_res.data.response.email,oauthType:'naver',oauthToken:token_parameter})
        .then((_res:any)=>{
          dispatch(setLogin({
            id:_res.data.Id,
            oauth:'naver',
            email:_res.data.Email,
            nickName:_res.data.Name,
          }));
        })
        .catch((_error:any)=>{
          dispatch(setRegisterOauth({email:_res.data.response.email,oauthType:'naver',oauthToken:token_parameter}))
          router.push('/register')
        })
      })
      .catch((_err)=>{
        alert('서버 오류! 잠시 후 다시 시도 해 주세요.')
      })
    }
  }
  useEffect(()=>{
    initNaverOauth()
    handleNaverCallBack()
  })

  return <div  id='naver_id_login'/>
  
}

export default NaverAouth;