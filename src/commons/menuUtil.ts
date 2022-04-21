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

export const setBoardMenu = (menu:string) => {

};