# workflow-app

## 概要

- 构建应用使用多端解决方案 Taro(taro-docs.jd.com/taro/docs/README/index.html)
- UI - Taro UI
- React + React-router + React-redux

## 开发

- h5 
```javascript
  "dev:h5": "npm run build:h5 -- --watch"
```
- 微信小程序
```javascript
  "dev:weapp": "npm run build:weapp -- --watch"
```

## 本地开发代理

- [dev-server]('./config/dev.js') 配置 webpack proxy

## 构建

- h5
```javascript
  "build:h5": "taro build --type h5"
```
- 微信小程序
```javascript
  "build:weapp": "taro build --type weapp"
```

## 注意事项

- Taro UI 固定版本了 3.0.0-alpha.3 3.x 以上
