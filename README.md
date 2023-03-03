# Riot API를 이용한 League of Legend 전적검색 사이트
## 사용 기술
<strong>Next.js, Riot API, Json-Server, Redux-toolkit, MariaDB, Node.js, AWS EC2</strong>
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
![image](https://user-images.githubusercontent.com/91608021/222413218-7efa4b56-0e3f-4634-a977-81c2b27047bc.png)


### 듀오구인 페이지
![image](https://user-images.githubusercontent.com/91608021/222413257-a102a9bc-97a0-4b8a-ad14-8d9a5eb6a679.png)

### 전적검색 페이지
![image](https://user-images.githubusercontent.com/91608021/222413314-daed047e-2f21-4c75-959e-c2c7e05e0dfd.png)


### 로그인&회원가입 페이지
![image](https://user-images.githubusercontent.com/91608021/216753196-965c51ad-d41d-4fb6-9ede-65a8777e21f1.png)

### 커뮤니티 페이지
![image](https://user-images.githubusercontent.com/91608021/222413449-3c62cd43-923e-4238-9e7b-b483b87a20c2.png)

### 커뮤니티 글 쓰기 페이지
![image](https://user-images.githubusercontent.com/91608021/222413556-134e5cc2-52a8-4373-b447-8e7412cfa529.png)
