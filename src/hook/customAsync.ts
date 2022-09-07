

export function customTimeout(_response:any,callback:any,time:number){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(_response)
    },time)
  })
}
