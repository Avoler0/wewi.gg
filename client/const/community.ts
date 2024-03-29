
 export const CommunityMenuList = [
    {
      'category':'홈',
      'division':['전체']
    },
    {
      'category':'정보',
      'division':['유저 뉴스','팁과 노하우']
    },
    {
      'category':'커뮤니티',
      'division':['자유','유머','사건 사고']
    }
  ]

  type QueryNameType = {
    kor: {[key:string]:string}
    eng: {[key:string]:string}
  }
  export const CommunityWriteOptionList = [ // 글 쓰기시 커뮤니티 출력을 위한 배열
    '전체','유저 뉴스','팁과 노하우','자유','유머','사건 사고'
  ]
  export const CommunityQueryName:QueryNameType = { // router시 영어로 된 path 이름을 변환 하기 위한 객체
    kor:{
      '전체':'all',
      '유저 뉴스':'user-news',
      '팁과 노하우':'tip',
      '자유':'free',
      '유머':'humor',
      '사건 사고':'issues',
    },
    eng:{
      'all':'전체',
      'user-news':'유저 뉴스',
      'tip':'팁과 노하우',
      'free':'자유',
      'humor':'유머',
      'issues':'사건 사고',
    }
  }