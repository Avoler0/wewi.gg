

// function diffFunc(target){
//   const now = new Date().getTime();
//   const diff = Math.floor((now-target.info.gameEndTimestamp) / 1000 / 60)
//   console.log("차이는",diff);
  
// }

export const time = {
  otherDay:function(target:number){
    const between = Math.floor((new Date().getTime() - target) / 1000 / 60);
    const betweenHour = Math.floor(between / 60)
    const betweenDay = Math.floor(betweenHour / 24)

    if(between < 1) return "방금 전";
    if(between < 60) return `${between}분 전`;
    if(betweenHour < 24) return `${betweenHour}시간 전`
    if(betweenDay < 365) return `${betweenDay}일 전`

    return `${Math.floor(betweenDay / 365)}년 전`
  },
  pass:function(start:number,end:number){
    const between = ((end - start) / 1000 / 60).toFixed(2).split(".")

    console.log(between[0]+"분"+between[1]+"초");
    // if(between < 1) return "";
    // if(between < 60) return `${between}분 전`;
    // if(betweenHour < 24) return `${betweenHour}시간 전`
    // if(betweenDay < 365) return `${betweenDay}일 전`

    return `${between[0]}분${between[1]}초`
  }
}

