import swaggerUi from 'swagger-ui-express';
import swaggereJsdoc from 'swagger-jsdoc';


// const options = {
//   swaggerDefinition: {
//     openapi: "3.0.0",
//     info: {
//       version: "1.0.0",
//       title: "WEWI.GG API DOCS",
//       description:
//         "프로젝트 설명 Node.js Swaager swagger-jsdoc 방식 RestFul API 클라이언트 UI",
//     },
//     servers: [
//       {
//         url: "http://localhost:4000/wewi-gg", // 요청 URL
//       },
//     ],
//   },
//   apis: ["./routers/*.ts", "./swagger/*","../controllers/account/*.ts"], //Swagger 파일 연동
// }

const options = {
    swaggerDefinition: {
        info: {
            title: 'Test API',
            version: '1.0.0',
            description: 'Test API with express',
        },
        host: 'localhost:4000',
        basePath: '/wewi-gg'
    },
    apis: ['src/**/*.ts','../src/routers/*.ts']
};

const specs = swaggereJsdoc(options);

export {swaggerUi, specs}

