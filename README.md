# react-demo

通过用dva-cli脚手架搭建写的一个react-demo,保留了进去的首页。
技术点是：`Router`、`Redux`、`express`、`mock`、`fetch`,当然这套`Redux`是通过dvajs重新封装了的。
* 因为这个是之前偷懒直接那之前写的jq版本改写过来的，CSS没有单独拿出来。
* 页面中的图片都比较大，所以加载起来都比较慢（图片加载完成后会执行一个方法，设置图片的具体宽高）

项目down下来之后首先
> npm install       //下载依赖  
> npm server        // 开启服务fetch接口请求相关数据  
> npm start     //执行之后会自动弹出页面
> npm bulid  //打包，之后可以在本地查看

目前改用express作为mock,更方便设置跨域接口，还有就是打包过后可以本地查看测试是否有问题，
> .roadhogrc文件中的代理可以忽略不计，我留着是为了防止以后有用方便查看的。
```javascript
  "proxy": {
   "/db_items": {
          "target": "http://localhost:3001",
          "changeOrigin": false,
          "pathRewrite": { "^/db_items" : "" }
        },
   "/db_arms": {
          "target": "http://localhost:9000",
          "changeOrigin": true,
          "pathRewrite": { "^/db_arms" : "" }
        }
  }
```

> json-server.js文件也是留作方便日后查看的


