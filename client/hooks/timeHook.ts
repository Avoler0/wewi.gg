export const timeHook = {
  otherDay:function(target:number){
    const between = Math.floor((Date.now() - target) / 1000 / 60);
    const betweenHour = Math.floor(between / 60)
    const betweenDay = Math.floor(betweenHour / 24)

    if(between < 1) return "방금 전";
    if(between < 60) return `${between}분 전`;
    if(betweenHour < 24) return `${betweenHour}시간 전`
    if(betweenDay < 365) return `${betweenDay}일 전`

    return `${Math.floor(betweenDay / 365)}년 전`
  },
  
  duration:function(time:number){
    return `${Math.floor(time/60)}분${time%60}초`
  }
}

