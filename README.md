# Riot API를 이용한 League of Legend 전적검색 사이트
## 사용 기술
<strong style="color:red">Next.js, Riot API, Json-Server, Redux-toolkit, MariaDB, Node.js, AWS EC2</strong>
<div>Next.js를 이용한 SSR로 구성된 사이트로 Next.js의 백엔드 서버를 적극 이용하여 Riot API와 비관계형 db 라이브러리 Json-Server을 통신 사용</div>
<div>추가로 Amazon Web Services EC2를 이용하여 웹 배포를 하였음</div>

## 간단 설명
<ul>
  <li>5가지 정도의 Riot Api를 사용하여 Json 데이터를 내려받아 데이터 정렬 후 사용</li>
  <li>Redux toolkit을 이용해 로그인시의 전역상태를 관리</li>
  <li>듀오구인 페이지, 회원가입 페이지등 Node.js를 이용하여 mariaDB 관계형 sql에 데이터 저장</li>
  <li>로그인,회원가입 페이지에서 Naver,Google Oatuh2.0을 추가</li>
  <li>커뮤니티 페이지 또한 Node.js, mariaDB를 이용하여 데이터 통신</li>
</ul>

## 페이지들
### 메인 페이지
![image](https://user-images.githubusercontent.com/91608021/211710992-3f9608a6-a44e-4978-9bd3-425d1a3e56a1.png)

### 듀오구인 페이지
![image](https://user-images.githubusercontent.com/91608021/211711142-3e0b96f3-d7c3-4eaa-9040-865b09417a23.png)

### 전적검색 페이지
![image](https://user-images.githubusercontent.com/91608021/211714575-66fdee09-3243-44e1-9060-6dca818e1f52.png)

### 로그인&회원가입 페이지
![image](https://user-images.githubusercontent.com/91608021/216753196-965c51ad-d41d-4fb6-9ede-65a8777e21f1.png)

### 커뮤니티 페이지
![image](https://user-images.githubusercontent.com/91608021/216753272-5320d1e1-052b-400e-8cdc-b508ac1589b4.png)

### 커뮤니티 글 쓰기 페이지
![image](https://user-images.githubusercontent.com/91608021/216753248-d591b66e-e5c7-489b-8976-36c726a2dd07.png)
