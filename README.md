롤 duo매칭 , 소환사 검색 사이트
## 프론트엔드 깃허브
  설치 방법 
  터미널 -> npm install -> npm run start

## 백엔드 깃허브
https://github.com/ApostleB/lol-matching-express-restAPI
실행 명령어 npm run dev

백엔드와 협업 도중 백엔드와의 일정이 맞지 않아 중단하여 json-server API를 이용하여 
코드를 리팩토링하여 재개발 할 계획입니다. (08.09)

## 로그인
<img src="https://user-images.githubusercontent.com/91608021/183600425-14a3825e-5a9a-4c9c-af5d-634ff5a03eab.png" />

### 추가 기능
- [x] 네이버 , 구글 OAuth을 이용하여 토큰을 받아서 로그인 가능
- [ ] 기본적인 로그인 시 아이디가 없을 시 modal 출력
- [ ] ID / PW 찾기


## 메인 페이지
<img src="https://user-images.githubusercontent.com/91608021/183596761-5919c148-d372-4379-8f38-8a4d843baeb4.png" />

### 추가 기능
- [x] 검색 input에 소환사 이름 검색을 할 시 소환사 페이지로 넘아감
- [ ] 어제 하루동안 칭찬을 많이 받은 유저를 목록에 표시해줌

## 소환사 페이지
<img src="https://user-images.githubusercontent.com/91608021/183597487-eb15f7c1-3ad2-4710-9b8f-e873f49566c0.png" />

### 추가 기능
- [x] riot api로 소환사의 프로필 icon과 level을 받아와 렌더링
- [x] riot api로 소환사의 솔로랭크 자유랭크 , 전적을 렌더링
- [x] riot api로 소환사의 최근 게임을 한번에 20개씩 받아와 아이템 구성과 스펠 , 룬 렌더링
- [ ] 최근 게임을 토대로 솔로랭크 자유랭크를 나누어 최근 챔피언 전적을 렌더링
- [ ] 소환사 비매너 신고 또는 칭찬 등 계획중

## 듀오 서치
<img src="https://user-images.githubusercontent.com/91608021/183599210-7e92f639-b066-4fb6-9454-3d6182d6692b.png" />
<img src="https://user-images.githubusercontent.com/91608021/183599311-bbf6c12b-3b4d-4663-a743-3d5c382f0aa2.png" />

### 추가 기능
- [x] 듀오 구인 reg 등록 post , 작성창과 input value 검사하여 부족한부분이 있으면 alert창 렌더링
- [x] 백엔드에 듀오 구인 글 목록을 받아와 렌더링
- [x] 사용자가 원하는 듀오의 티어 , 포지션 , 게임타입을 지정하여 sort하여 볼 수 있게 렌더링

## 클랜
- [x] 클랜 등록 기능 구현 / 클랜이름 , 비밀번호 , 클랜 소개글 
- [x] 클랜 등록한 글들 렌더링
- [ ] 배너 파일 추가 미구현

## 커뮤니티
- [x] 삭제 예정
