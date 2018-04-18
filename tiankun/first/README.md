# Koa2 学习项目

新建项目，初始化npm，然后准备koa的安装和初始化：

```$ npm install koa --save```

为了能够顺畅的使用我们心爱的ES6语法，需要安装一下polyfill
```
$ npm install --save-dev babel-polyfill babel-preset-es2015
```

顺便在根目录建立.babelrc文件：
```
{
  "presets": [
    "es2015"
  ]
}
```

## 运行koa
```$ npm install nodemon --save```

```$ npm run start```

## 自动化测试
```
$ npm install --save-dev jest
```

具体配置请见package.json里的`jest`

```
$ npm run test
```
