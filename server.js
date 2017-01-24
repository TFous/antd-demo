
var express = require('express');

var DEV_PORT ='9000';
var BUILD_PORT ='9001';

var app = express();

//服务开启跨域请求
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

var appData = require('./src/data/db_arms.json');
var nav = appData.nav;
var arms = appData.arms;
var apiRoutes = express.Router();
apiRoutes.get('/nav', function (req, res) {
    res.json({
        errno: 0,
        data: nav
    });
});
apiRoutes.get('/arms', function (req, res) {
    res.json({
        errno: 0,
        data: arms
    });
});
app.use('/db_arms', apiRoutes);


var appData1 = require('./src/data/db_items.json');
var nav1 = appData1.nav;
var arms1 = appData1.items;
var apiRoutes1 = express.Router();
apiRoutes1.get('/nav', function (req, res) {
    res.json({
        errno: 0,
        data: nav1
    });
});
apiRoutes1.get('/items', function (req, res) {
    res.json({
        errno: 0,
        data: arms1
    });
});

app.use('/db_items', apiRoutes1);

module.exports = app.listen(DEV_PORT, function (err) {
    if (err) {
        console.log(err);
        return
    }
    console.log('DEV_PORT Listening at http://localhost:' + DEV_PORT + '\n')
});


//BUILD 后本地查看服务
var build=express();

var buildRouter = express.Router();

buildRouter.get(['/','/page_items','/page_arms'], function (req, res, next) {
    req.url = '/index.html';
    next();
});

build.use(buildRouter);
build.use(express.static('./dist'));
module.exports = build.listen(BUILD_PORT, function (err) {
    if (err) {
        console.log(err);
        return
    }
    console.log('BUILD_PORT Listening at http://localhost:' + BUILD_PORT + '\n')
});
