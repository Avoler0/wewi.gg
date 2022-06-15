
export function getTime(time:any) {
  
   const date = {
    Year: Number(time.getFullYear()),
    Month: Number(time.getMonth()+1),
    Date: Number(time.getDate()),
    Hours: Number(time.getHours()),
    Minutes : Number(time.getMinutes()),
    Seconds: Number(time.getSeconds()),
    Last:new Date(time.getFullYear(),time.getMonth(),-1).getDate()+1 // 전달 막일
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
      return timeDiffArr;
    }
    if(nowTime.Month !== createTime.Month){
      if(nowTime.Month - createTime.Month === 1){
        const dateDiff = (nowTime.Date+nowTime.Last) - createTime.Date
        if(dateDiff >= createTime.date){
          timeDiffArr.push(Math.abs(nowTime.Month - (createTime.Month)))
          timeDiffArr.push("달")
        }
        timeDiffArr.push(dateDiff)
        timeDiffArr.push("일")
      }else{
        timeDiffArr.push(Math.abs(nowTime.Month - (createTime.Month)))
          timeDiffArr.push("달")
      }
      return timeDiffArr;
    }
    if(nowTime.Date !== createTime.Date){
      timeDiffArr.push(Math.abs(nowTime.Date - createTime.Date))
      timeDiffArr.push("일")
      return timeDiffArr;
    }
    if (nowTime.Hours !== createTime.Hours){
      timeDiffArr.push(Math.abs(nowTime.Hours - createTime.Hours))
      timeDiffArr.push("시간")
      return timeDiffArr;
    }
    if(nowTime.Minutes !== createTime.Minutes){
      timeDiffArr.push(Math.abs(nowTime.Minutes - createTime.Minutes))
      timeDiffArr.push("분")
      return timeDiffArr;
    }
    if(nowTime.Seconds !== createTime.Seconds){
      timeDiffArr.push(Math.abs(nowTime.Seconds - createTime.Seconds))
      timeDiffArr.push("초")
      return timeDiffArr;
    }
  }
  // export const timeDiff = (aTime:number , bTime:number) => {
  //   const diffDate = aTime - bTime;
  //   return Math.abs(diffDate / (1000 * 3600 * 24));
  // }
  export const timeLimit = (data:any,minute:number) =>{
    setTimeout(()=>{
      return data;
    },minute)
  }