const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8000',
            changeOrigin: true,
        }),
    );
    app.use(
        '/ai',
        createProxyMiddleware({
            target: 'https://yeojisu.pythonanywhere.com',
            changeOrigin: true,
            onProxyRes: function (proxyRes, req, res) {
                proxyRes.headers['Access-Control-Allow-Origin'] = '*';
            },
        }),
    );
};
