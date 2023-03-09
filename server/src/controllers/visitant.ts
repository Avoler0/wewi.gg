

export function visitantLog(req:any,res:any){
  const {ip} = req.body;
  console.log('## 방문자 로그 ## -------------------- Ip Address : ',ip);
}