export const getMenuName = (menu:string) => {
  switch (menu) {
    case 'All':
      return '전체';
    case 'Notice':
      return '공지사항';
    case 'LoLInfo':
      return '롤 소식';
    case 'Tip':
      return '팁과 노하우';
    case 'Free':
      return '자유'
    case 'Fun':
      return '유머'
    case 'Video':
      return '영상';
    case 'Event':
      return '사건사고';
    case 'FanArt':
      return '팬아트';
    default:
      return 'All'
  }
};
export const getTierName = (tier:string) => {
  switch (tier) {
    case 'IRON':
      return '아이언';
    case 'BRONZE':
      return '브론즈';
    case 'SILVER':
      return '실버';
    case 'GOLD':
      return '골드';
    case 'PLATINUM':
      return '플레티넘'
    case 'DIAMOND':
      return '다이아몬드'
    case 'MASTER':
      return '마스터';
    case 'GRANDMASTER':
      return '그랜드마스터';
    case 'CHALLENGER':
      return '챌린저';
    default:
      return 'UN RANKED'
  }
};

export const getTierColor = (tier:string) => {
  switch (tier) {
    case 'IRON':
      return '#94868B';
    case 'BRONZE':
      return '#B97451';
    case 'SILVER':
      return '#A2C0C7';
    case 'GOLD':
      return '#F1A64D';
    case 'PLATINUM':
      return '#63B7B3'
    case 'DIAMOND':
      return '#738DF9';
    case 'MASTER':
      return '#9D5DDD';
    case 'GRANDMASTER':
      return '#EF4F4F';
    case 'CHALLENGER':
      return '#F4C873';
  }
}
export const getQueueType = (queueType:number) => {
  switch(queueType){
    case 400: return "일반게임";
    case 420: return "솔로랭크";
    case 430: return "일반게임";
    case 440: return "자유랭크";
    case 450: return "칼바람나락";
    case 900: return "우르프";
  }
}
export const getSpellName = (spellId:number) => {
  switch(spellId){
    case 21: return "SummonerBarrier";
    case 1: return "SummonerBoost"
    case 14: return "SummonerDot"
    case 3: return "SummonerExhaust"
    case 4: return "SummonerFlash"
    case 6: return "SummonerHaste"
    case 7: return "SummonerHeal"
    case 13: return "SummonerMana"
    case 30: return "SummonerPoroRecall"
    case 31: return "SummonerPoroThrow"
    case 11: return "SummonerSmite"
    case 39: return "SummonerSnowURFSnowball_Mark"
    case 32: return "SummonerSnowball"
    case 12: return "SummonerTeleport"
    case 54: return "Summoner_UltBookPlaceholder"
    case 55: return "Summoner_UltBookSmitePlaceholder"
    default: return "Failed"
  }
}
export const setBoardMenu = (menu:string) => {

};