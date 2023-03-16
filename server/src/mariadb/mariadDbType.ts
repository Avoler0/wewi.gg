

export type MariaDBErrorType = {
  text:string,
  sql:string,
  fatal:boolean,
  errno:number,
  sqlState:string,
  code:string,
  message:string
}