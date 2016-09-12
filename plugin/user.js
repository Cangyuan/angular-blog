var ModelUser = require('../model/user');
//登录
module.exports.login={
    get: function(req, res, next) {
        res.render('login', { title: '登录' });
    },
    post:function(req, res, next) {
        var postDate = {
            name:req.body.username
        };
        var resJson = {
            status : false,
            msg : ''
        }
        ModelUser.findOne(postDate,function (err,data) {
            if (err){
                console.log(err)
            }
            console.log(data)
            if(data){
                if (data.password==req.body.password){
                    // res.send('登录成功');
                    req.session.user = data;
                    resJson.status = true;
                    resJson.msg = '登录成功';
                    res.send(resJson)
                    //res.redirect('/');
                }else{
                    resJson.msg = '密码错误';
                    res.send(resJson)
                }
            }else{
                //console.log(postDate)
                resJson.msg = '没有此用户';
                res.send(resJson)
            }
        })
    }
}
//注册
module.exports.register = {
    get:function(req, res, next) {
        res.render('register', { title: '注册' });
    },
    post:function(req, res, next) {
        var postDate = {
            name:req.body.username,
            password:req.body.password
        };
        var resJson = {
            status : false,
            msg : ''
        }

        ModelUser.findOne({name:req.body.username},function (err,data) {
            if (err){
                console.log(err)
            }
            if(data){
                resJson.msg = '此用户已经被注册了！' ;
                res.send(resJson)
            }

            ModelUser.create(postDate,function (err,data) {
                if (err){
                    resJson.msg = '注册异常';
                 console.log(postDate)
                   // res.send(resJson)
                }
                resJson.msg = '注册成功';
                resJson.status = true;
                req.session.user=data;
                //res.send(resJson)

            })
        })

    }
}
//退出登录
module.exports.logout = {
    get:function (req, res, next){
        delete req.session.user;
        res.redirect('/admin');
    }
}
//登录后才能访问
module.exports.loginYes = function(req,res,next){
    var user = req.session.user;
    if(!user){
        res.redirect('/login')
    }else{
        next();
    }
}
//登录前才能访问
module.exports.loginNo = function(req,res,next){
    var user = req.session.user;
    if(user){
        res.redirect('/')
    }else{
        next();
    }
}