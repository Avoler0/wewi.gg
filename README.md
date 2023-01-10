# Riot API를 이용한 League of Legend 전적검색 사이트
## 사용 기술
<div>Next.js, Riot API, Json-Server, Redux-toolkit</div>
<div>Next.js를 이용한 SSR로 구성된 사이트로 Next.js의 백엔드 서버를 적극 이용하여 Riot API와 Json-Server 라이브러리 통신 사용</div>


## 디렉터리 구조
### pages
```
 📦pages </br>
 ┣ 📂api  
 ┃ ┗ 📂search  
 ┃ ┃ ┣ 📂champion  
 ┃ ┃ ┃ ┗ 📜[value].ts  
 ┃ ┃ ┗ 📂summoner  
 ┃ ┃ ┃ ┗ 📜[value].ts  
 ┣ 📂duo  
 ┃ ┗ 📜index.tsx  
 ┣ 📂summoner  
 ┃ ┗ 📜[summoner].tsx  
 ┣ 📜globals.css  
 ┣ 📜index.tsx  
 ┣ 📜_app.tsx  
 ┗ 📜_document.tsx  
```
### component
```
📦component  
 ┣ 📂footer  
 ┃ ┗ 📜footer.tsx  
 ┣ 📂gnb  
 ┃ ┣ 📂header  
 ┃ ┃ ┗ 📜header.tsx  
 ┃ ┣ 📂navigation  
 ┃ ┃ ┗ 📜navigation.tsx  
 ┃ ┗ 📜index.tsx  
 ┗ 📂summoner  
 ┃ ┣ 📂debs  
 ┃ ┃ ┗ 📜profile.tsx  
 ┃ ┣ 📜404.tsx  
 ┃ ┗ 📜index.tsx  
```
### redux
```
📦redux
 ┣ 📂login
 ┣ 📂search
 ┃ ┗ 📜searchSlice.ts
 ┗ 📜store.ts
```

### hooks && const
```
📦hooks  
 ┣ 📜axiosInstance.ts  
 ┗ 📜search.ts  
 
 📦const  
 ┗ 📜riotApiPath.ts  
```
