// 加载模块
const express = require('express')

const router = express.Router()
// 加载所有的处理函数模块
const index = require('./controllers/index')
const topic = require('./controllers/topic')
const user = require('./controllers/user')


// 首页路由----------------------------------------
router
  .get('/', index.showIndex)

// 用户路由-------------------------------------
router
// 渲染登陆首页
  .get('/signin', user.showSignin)
// 处理登陆请求
  .post('/signin', user.signin)
// 渲染注册页面
  .get('/signup', user.showSignup)
// 处理注册请求
  .post('/signup', user.signup)
// 处理退出请求
  .post('/signout', user.signout)

// 话题相关路由-----------------------------------
router
// 渲染话题页面
  .get('/topic/create', topic.showCreate)
// 处理发布请求
  .post('/topic/create', topic.create)
// 渲染话题详情页
  .get('/topic/:topicID', topic.show)
// 渲染编辑话题页面
  .get('/topic/:topicID/edit', topic.showEdit)
// 处理编辑话题请求
  .post('/topic/:topicID/edit', topic.edit)
// 处理删除话题请求
  .post('/topic/:topicID/delete', topic.delete)




// 导出路由对象

module.exports = router