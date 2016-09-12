var express = require('express');
var router = express.Router();

var PluginUser = require('../plugin/user');
var PluginBlog = require('../plugin/blog');

//注册
router.post('/register',PluginUser.register.post );
//登录
router.post('/login',PluginUser.login.post);

//发表博客
router.post('/admin', function(req, res, next) {
 var postData = {
  author: req.session.user._id,
  title: req.body.arc-title,
  content: req.body.edit-main
 };
 ModelBolg.create(postData, function (err, data){

  if(err)console.log(err);
  //res.redirect('/admin');
  res.send(data);
 });
});

  /* GET home page. */
 router.get('/', function(req, res, next) {
 res.render('index', { title: '沧苑的博客' });
 });

router.get('/register',PluginUser.loginNo, PluginUser.register.get);
router.get('/login',PluginUser.loginNo,PluginUser.login.get);


router.get('/logout',function (req, res, next){
 delete req.session.user;
 res.redirect('/');
});

 router.get('/about', function(req, res, next) {
 res.render('about', {title:'关于我'});
 });
 router.get('/admin', function(req, res, next) {
 res.render('admin',{title:'admin'});
 });
 //登录相关函数
 function checkLogin(req, res, next) {
  if (!req.session.user) {
   req.flash('error', '未登录!');
   return res.redirect('/login');
  }
  next();
 }
 function checkNotLogin(req, res, next) {
  if (req.session.user) {
   req.flash('error', '已登录!');
   return res.redirect('back');//返回之前的页面
  }
  next();
 };
 module.exports = router;

// angular用nodejs主要是用它的npm工具包，npm里面有很多很方便的工具可以用在前端开发，例如
// - 合并js,css
// - 压缩js
// - 压缩图片
// - 生成js的source map
// - 编译 less 成css
// - 运行测试unit test
// - Grunt, Gulp任务管理，自动化上面所有的任务