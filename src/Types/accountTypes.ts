

type loginType = "general" | "naver" | "google";

export interface accountT{
  id:number,
  type:loginType,
  email:string,
  password:string,
  nickName:string
}
export interface accountReduxT{
  login:boolean,
  type:loginType,
  email:string,
  nickName:string
}