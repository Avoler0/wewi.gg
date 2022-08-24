import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import {QueryClient , QueryClientProvider} from "react-query";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
*{
  /* font-family: 'Nanum Gothic', sans-serif; */
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
  /* @media(width:700px) {
    font-size: 50%;
} */
body {
  font-weight: 300;
  /* font-family: 'Source Sans Pro', sans-serif; */
  font-family: 'Nanum Gothic', sans-serif;
  color: #dfe6e9;
  line-height: 1.2;
  /* background-color: #2c3e50; */
  background-image: url(https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta994c96cd213519b/61e9b3c2c6172549a9716676/Zeri_Theme_Banner.jpg);
}
a {
  text-decoration:none;
  color:inherit;
}
img,button,span{
  vertical-align: middle;
}
}
`;
const client = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Suspense fallback={null}>
        <QueryClientProvider client={client}>
          <GlobalStyle />
          <App />
        </QueryClientProvider>
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

