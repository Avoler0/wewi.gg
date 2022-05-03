
export function getTime(time:any) {
   const date = {
    Year: Number(time.getFullYear()),
    Month: Number(time.getMonth()+1),
    Date: Number(time.getDate()),
    Hours: Number(time.getHours()),
    Minutes : Number(time.getMinutes())
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
export const timeDiffFunc = (nowTime:any,createTime:string) => {
    const now = {
    year : Number(nowTime.getFullYear()),
    month: Number(nowTime.getMonth()),
    date: Number(nowTime.getDate()),
    hour : Number(nowTime.getHours()),
    minute : Number(nowTime.getMinutes())
  }
  const create = {
    year : Number(createTime.split("T")[0].split("-")[0]),
    month: Number(createTime.split("T")[0].split("-")[1]),
    date: Number(createTime.split("T")[0].split("-")[2]),
    hour : Number(createTime.split(":")[1]),
    minute : Number(createTime.split(":")[2].split(".")[0])
  }
  const timeDiffArr:any[] = []
    if(now.year !== create.year){
      timeDiffArr.push(now.year - create.year)
      timeDiffArr.push("년")
      return timeDiffArr;
    }
    if(now.month !== create.month){
      timeDiffArr.push(now.month - create.month)
      timeDiffArr.push("달")
      return timeDiffArr;
    }
    if(now.date !== create.date){
      timeDiffArr.push(now.date - create.date)
      timeDiffArr.push("일")
      return timeDiffArr;
    }
    if (now.hour !== create.hour){
      timeDiffArr.push(now.hour - create.hour)
      timeDiffArr.push("시간")
      return timeDiffArr;
    }
    if(now.minute !== create.minute){
      timeDiffArr.push(now.minute - create.minute)
      timeDiffArr.push("분")
      return timeDiffArr;
    }
  }