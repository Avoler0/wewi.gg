const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware(
        '/api',
        {
        target: 'http://localhost:4000',
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
        }
        })
    );
};


// import * as express from 'express';
// import { createProxyMiddleware, Filter, Options, RequestHandler } from 'http-proxy-middleware';

// const app = express();

// app.use('/api', createProxyMiddleware({ target: 'http://localhost:4000', changeOrigin: true }));
// app.listen(4000);

// app.use('/lol', createProxyMiddleware({ target: 'https://asia.api.riotgames.com', changeOrigin: true , pathRewrite:{'^/lol': ''}}));
// app.listen(3000);