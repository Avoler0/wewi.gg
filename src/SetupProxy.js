// const createProxyMiddleware = require("http-proxy-middleware");

// module.exports = function (app) {
//     app.use(createProxyMiddleware("/api", {
//         target: "http://localhost:4000",
//         changeOrigin: true,
//         // ws: true,
//         // pathRewrite: { '^/back': '' }

//     }));
// }


const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/back',createProxyMiddleware({
        target: 'http://localhost:4000',
        changeOrigin: true,
        })
    );
};