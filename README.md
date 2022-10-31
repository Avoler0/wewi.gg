롤 duo매칭 , 소환사 검색 사이트
## 프론트엔드 깃허브
  설치 방법 
  터미널 -> npm install -> npm run start

## 백엔드 깃허브
https://github.com/ApostleB/lol-matching-express-restAPI
실행 명령어 npm run dev

백엔드와 협업 도중 백엔드와의 일정이 맞지 않아 중단하여 json-server API를 이용하여 
코드를 리팩토링 중 입니다.  
<strong>branch => nextjs</strong>

## 로그인
<img src="https://user-images.githubusercontent.com/91608021/183600425-14a3825e-5a9a-4c9c-af5d-634ff5a03eab.png" />

### 추가 기능
- [x] 로그인 시 전역상태관리를 통하여 로그인 여부 상태를 관리 할 수 있습니다.
- [x] 네이버 , 구글 OAuth을 이용하여 토큰을 받아서 로그인 가능

## 메인 페이지

![Screenshot 2022-09-24 at 09 54 32](https://user-images.githubusercontent.com/91608021/192073235-839855da-5b90-4943-aa54-76a5046739cf.png)

### 추가 기능
- [x] 검색 input에 소환사 이름 검색을 할 시 소환사 정보 페이지로 넘어갑니다.

## 소환사 페이지
<img src="https://user-images.githubusercontent.com/91608021/183597487-eb15f7c1-3ad2-4710-9b8f-e873f49566c0.png" />

### 추가 기능
- [x] riot api로 소환사의 프로필 icon과 level을 받아와 렌더링
- [x] riot api로 소환사의 전적을 받아와 20개 이상의 전적을 상세하게 보여줍니다.


## 듀오 서치
<img src="https://user-images.githubusercontent.com/91608021/183599210-7e92f639-b066-4fb6-9454-3d6182d6692b.png" />
<img src="https://user-images.githubusercontent.com/91608021/183599311-bbf6c12b-3b4d-4663-a743-3d5c382f0aa2.png" />

### 추가 기능
- [x] 듀오 구인 reg 등록 post , 작성창과 Validation 후 alert 경고창 
- [x] 백엔드에 듀오 구인 글 목록을 받아와 렌더링
- [x] 사용자가 원하는 듀오의 티어 , 포지션 , 게임타입을 지정하여 sort하여 볼 수 있게 렌더링

