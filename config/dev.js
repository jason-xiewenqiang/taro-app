const bypass = require('./bypass');
module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {},
  h5: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://192.168.4.67:17101',
          changeOrigin: true,
          bypass(req, res) {
            let data = bypass(req.method.toLowerCase(), req.url);
            if (data) {
              res.end(data);
              return false;
            }
            return undefined;
          },
        },
        '/auth': {
          target: 'http://192.168.29.107:31000',
          changeOrigin: true,
          bypass(req, res) {
            let data = bypass(req.method.toLowerCase(), req.url);
            if (data) {
              res.end(data);
              return false;
            }
            return undefined;
          },
        },
      },
    },
  }
}
