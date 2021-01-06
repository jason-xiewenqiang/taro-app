import Taro from '@tarojs/taro';
const SUCCESS_CODE = 200;
const header = {
  'content-type': 'application/json',
  'token': window.sessionStorage.getItem('token') || ''
}

export default function ajax(url, method, data, options) {
  return new Promise((resolve, reject) => {
    Taro.request({
      url,
      data,
      header,
      method: method,
      success: result => {
        const { code, data, message, status } = result.data;
        if (code === SUCCESS_CODE || status === SUCCESS_CODE) {
          resolve(data)
        } else {
          reject(message)
        }
      },
      fail: () => {
        reject('服务器请求出错了')
      },
      ...options,
    })
  })
}
