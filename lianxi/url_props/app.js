/*
* @Author: Marte
* @Date:   2017-11-20 22:16:08
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-20 22:29:40
*/

'use strict';
// 引入express和express-art-template
const express = require("express");

const expressArtTempate = require("express-art-template");

// 声明数据
let myHeros = [{
    id:1,name:"李白"
},{
    id:2,name:"张飞"
},{
    id:3,name:"关于"
},];

let app = express();

// res.render("index.html")
// 能有效果，配置模板殷勤
// 创建路由对象
let router = express.Router();
app.engine("html",expressArtTempate);
// 配置路由规则
//
router.get("/",(req,res,next)=>{
    // 文件名  数据对象
    res.render("index.html",{
        heros:myHeros
    });
})

// 请求/showHero后面没有/就是这个
.get("/showHero",(req,res,next)=>{
    res.send(`
            您点击的myid:$(req.params.myid)
        `);
})

// 内置中间件
let staticObj = express.static("./public");

app.use("/public",staticObj);

app.use(router);

// 开启服务器
app.listen(8888);