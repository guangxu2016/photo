'use strict';

// 引入express对象
const express = require("express");
// 构建对象器对象
let app = express();

// 前两个中间件的处理是针对url以 /huncai开头才触发执行
app.use("/huncai",(req,res,next)=>{
    console.log(req.url);
    // 当url是/huncai/zhu/1/1
    // req.url 是/zhu/1/2
    console.log("猪肉");
    next();
});
app.use("/huncai",(req,res,next)=>{
    console.log("牛肉");
    next();
});
// 后两个中间件的处理是针对url以 /sucxai开头才触发执行
app.use("/sucai",(req,res)=>{
    res.writeHead(200,{
        "content-type":"text/plain;charset=utf-8"
    })
    res.end("吃完了，开心");
})

// 开启监听
app.listen(8888,()=>{
    console.log("你好，请选择你吃的菜:");
})