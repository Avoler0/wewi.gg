

export const tierUtils = { 
  name:function(tier:string){ // 롤 티어 한글 번역 함수
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
        return 'UNRANKED'
    }
  },
  color:function(tier:string){ // 롤 티어의 값을 반환하는 함수
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
      default :
        return '#ffffff';
    }
  },
  value:function(tier:string | null){ // 롤 티어에 값을 매기는 함수
    switch (tier) {
      case 'IRON':
        return 1;
      case 'BRONZE':
        return 2;
      case 'SILVER':
        return 3;
      case 'GOLD':
        return 4;
      case 'PLATINUM':
        return 5;
      case 'DIAMOND':
        return 6;
      case 'MASTER':
        return 7;
      case 'GRANDMASTER':
        return 8;
      case 'CHALLENGER':
        return 9;
      default :
        return 0;
    }
  },
  number:function(rank:string | null){
    switch (rank) {
      case 'I':
        return 1;
      case 'II':
        return 2;
      case 'III':
        return 3;
      case 'IV':
        return 4;
      default :
        return 0;
    }
  }
}

export const queueUtils:any = { // 롤 API에서 넘어노는 큐 타입 넘버를 스트링으로 변환하는 함수
  type:{
    400: '일반 게임', //Normal Draft Pick
    420: '솔로 랭크',
    430: '일반 게임',
    440: '자유 랭크',
    450: '칼바람 나락',
    700: 'clash',
    800: 'ai',  // Deprecated
    810: 'ai',  // Deprecated
    820: 'ai',  // Deprecated
    830: 'ai',
    840: 'ai',
    850: 'ai',
    900: '우르프',
    920: '포로',
    1020: 'ofa',
    1300: 'nbg',
    1400: '궁극기 주문서', // Ultimate Spellbook
    1900: '우르프',
    2000: '튜토리얼',
    2010: '튜토리얼',
    2020: '튜토리얼',
  }
}

export const spellName = (spellId:number) => { // 롤 API사용시 스펠 넘버를 eng 로 변환 하는 함수
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
export const filterName = { // 필터값을 영어로 사용하고 , 이후 값 출력을 위한 함수
  mode:function(value:string){
    switch(value){
      case 'All':
        return '모든 게임';
      case 'Normal':
        return '일반 게임';
      case 'Solo':
        return '솔로 랭크';
      case 'Team':
        return '자유 랭크';
      case 'Team':
        return '칼바람';
      case 'Special':
        return '특별 모드';
    }
  }
}
export const options = { // 필터부분 옵션출력을 위한 객체
  lines : ["All","Top","Mid","Jungle","Bottom","Support"],
  game:[
      {value:"All",label:"모두보기"},
      {value:"Normal",label:"일반게임"},
      {value:"Solo",label:"솔로랭크"},
      {value:"Team",label:"자유랭크"},
      {value:"Aram",label:"칼 바 람"},
      {value:"Special",label:"특별모드"},
    ],
    tier:[
      {value:"All",label:"모두보기"},
      {value:"Unranked",label:"언랭"},
      {value:"Iron",label:"아이언"},
      {value:"Bronze",label:"브론즈"},
      {value:"Silver",label:"실버"},
      {value:"Gold",label:"골드"},
      {value:"Platinum",label:"플레티넘"},
      {value:"Diamond",label:"다이아"},
      {value:"Master",label:"마스터"},
      {value:"Grandmaster",label:"그랜드마스터"},
      {value:"Challenger",label:"챌린저"},
    ],
  }
    type LineListTrans = {
    kor:string[]
    eng:string[]
    trans:{[key:string]:string}
  }
  export const lineList:LineListTrans = { // 라인 관련 리스트
    kor: ['탑','정글','미드','바텀','서포터'],
    eng: ['Top','Jungle','Mid','Bottom','Support'],
    trans:{
      '탑':'Top',
      '정글':'Jungle',
      '미드':'Mid',
      '바텀':'Bottom',
      '서포터':'Support'
    }
  }

 