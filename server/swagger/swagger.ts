import swaggerUi from 'swagger-ui-express';
import swaggereJsdoc from 'swagger-jsdoc';


const options = {
    swaggerDefinition: {
        info: {
            title: 'WEWI.GG API DOCS',
            version: '1.0.0',
            description: 'WEWI.GG API with express',
        },
        host: `${process.env.HOST}:4000`,
        basePath: '/wewi-gg'
    },
    apis: ['src/**/*.ts','../src/routers/*.ts']
};

const specs = swaggereJsdoc(options);

export {swaggerUi, specs}

