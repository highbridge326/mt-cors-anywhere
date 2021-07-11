require('dotenv').config();

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8080;

import * as cors_proxy from 'cors-anywhere';
cors_proxy
  .createServer({
    // allowed origins
    originWhitelist: process.env.ORIGIN_LIST
      ? process.env.ORIGIN_LIST.split(',')
      : [],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
  })
  .listen(port, host, function () {
    console.log('Launch CORS Anywhere ' + host + ':' + port);
  });
