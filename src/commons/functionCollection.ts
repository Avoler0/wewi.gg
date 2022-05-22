
export function getTime(time:any) {
   const date = {
    Year: Number(time.getFullYear()),
    Month: Number(time.getMonth()+1),
    Date: Number(time.getDate()),
    Hours: Number(time.getHours()),
    Minutes : Number(time.getMinutes()),
    Seconds: Number(time.getSeconds())
  } 
  return date
}
interface timeObject {
  year:number,
  month:number,
  date:number,
  hour:number,
  minute:number,
}

export const timeDiff = (nowTime:any,createTime:any) => { // 시간 비교
  const timeDiffArr:any[] = []
    if(nowTime.Year !== createTime.Year){
      timeDiffArr.push(Math.abs(nowTime.Year - createTime.Year))
      timeDiffArr.push("년")
    }
    if(nowTime.Month !== (createTime.Month)){
      timeDiffArr.push(Math.abs(nowTime.Month - (createTime.Month)))
      timeDiffArr.push("달")
    }
    if(nowTime.Date !== createTime.Date){
      timeDiffArr.push(Math.abs(nowTime.Date - createTime.Date))
      timeDiffArr.push("일")
    }
    if (nowTime.Hours !== createTime.Hours){
      timeDiffArr.push(Math.abs(nowTime.Hours - createTime.Hours))
      timeDiffArr.push("시간")
    }
    if(nowTime.Minutes !== createTime.Minutes){
      timeDiffArr.push(Math.abs(nowTime.Minutes - createTime.Minutes))
      timeDiffArr.push("분")
    }
    if(nowTime.Seconds !== createTime.Seconds){
      timeDiffArr.push(Math.abs(nowTime.Seconds - createTime.Seconds))
      timeDiffArr.push("초")
    }
    return timeDiffArr;
  }

  export const timeLimit = (data:any,minute:number) =>{
    setTimeout(()=>{
      return data;
    },minute)
  }