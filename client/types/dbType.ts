export type PostType = {
  PostId:number,
  PostTitle:string,
  Content:string,
  CommunityName:string,
  UserName:string,
  CreateAt:string,
  Good:number,
  Bad:number,
  View:number,
  Thumnail:string
}

export type LoginToken = {
  id:number,
  email:string,
  name:string,
  createAt:string,
  updateAt:string,
  type:string,
  iat:number,
  exp:number,
  iss:string,
  sub:string
}