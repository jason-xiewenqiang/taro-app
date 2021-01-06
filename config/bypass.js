const fs = require('fs');
const path = require('path');

/**
 * 通过method、url返回对应数据
 */
module.exports = function getData(method = 'get', url = '') {
  let fPath = `${method}${url.replace(/\//g, '-')}.json`;

  let filePath = path.resolve(__dirname, './mock', fPath);
  if (!fs.existsSync(filePath)) return null;

  console.log(`\x1B[32m Mock --> ${method} ${url} ${filePath} \x1B[0m `);
  return fs.readFileSync(filePath, 'utf-8');
};
