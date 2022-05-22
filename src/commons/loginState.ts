import jwt_decode from "jwt-decode"
import { configureStore, createSlice } from "@reduxjs/toolkit";

const isUser = createSlice({
  name:'userLoginState',
  initialState:{
    login: "default",
    token: {
      token:"",
      refreshToken:""
    },
  },
  reducers:{
    isLoggedIn: (state,action) => {
      // const payloadToken = action.payload.token.token.split(".")[1];
      state.login = action.payload.login;
      state.token = action.payload.token;
      setStorage(state.login,state.token)
    },
    isLoggedOut: (state,action) => {
      state.login = action.payload.login;
      state.token = action.payload.token;
      storageCler()
    },
    isLoginState: (state,action) =>{ // 로그인 상태에서 새로고침시 로그인 다시 로드
      state.login = action.payload.login;
      state.token = action.payload.token;
    }
  }
})

const user = configureStore({reducer: isUser.reducer});

interface tokenInter{
  token:string,
  refreshToken?:string
}

function setStorage(login:string,token:tokenInter){
  const payloadToken = token.token.split(".")[1];
  console.log(payloadToken);
  
  localStorage.setItem("loginState",login)
  localStorage.setItem("loginToken",payloadToken);
}
function storageCler(){
  localStorage.removeItem("loginState");
  localStorage.removeItem("loginToken");
}

export const {
  isLoggedIn,
  isLoggedOut,
  isLoginState
} = isUser.actions;
export function getLoginState(){
  const login = localStorage.getItem('loginState');
  const token = localStorage.getItem('loginToken');
  return {login:login,token:token}
}
export function getUserData(payLoad:any){ // jwt payload 토큰으로 백엔드 사용자 정보 갖고오기
  try{
    const userData = jwt_decode(payLoad , { header: true })
    return userData
  }catch(error:any){
    return error
  }
}



export default user;