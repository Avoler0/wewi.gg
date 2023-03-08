

export function visitantLog(req:any,res:any){
  const {ip} = req.query
  console.log('## 방문자 로그 ## -------------------- Ip Address : ',ip)
}