'use strict';
// 引入express对象
const express = require("express");
// 构建对象器对象
let app = express();
// app.use在请求的时候一定会触发

app.use((req,res,next)=>{
    console.log("小白菜");
    next();//放行到红烧肉
});

app.use((req,res,next)=>{
    console.log("红烧肉");
    next();//放行到蛋炒饭
});

app.use((req,res)=>{
    console.log("蛋炒饭");
    rex.end("ok");
})

// 来气监听
app.listen(8888,()=>{
    console.log("猜猜我是什么菜");
})
