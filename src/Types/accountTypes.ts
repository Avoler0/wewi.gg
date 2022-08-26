

type loginType = "general" | "naver" | "google";

export interface accountT{
  id:number,
  type:loginType,
  email:string,
  password:string,
  nickName:string
}