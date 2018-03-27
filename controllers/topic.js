// 渲染话题页面
exports.showCreate = (req, res) => {
  res.render('topic/create.html')
}
// 处理发布请求
exports.create = (req, res) => {
  res.send('create')
}
// 渲染话题详情页
exports.show = (req, res) => {
  res.send('show')
}
// 渲染编辑话题页面
exports.showEdit = (req, res) => {
  res.send('showEdit')
}
// 处理编辑话题请求
exports.edit = (req, res) => {
  res.send('edit')
}
// 处理删除话题请求
exports.delete = (req, res) => {
  res.send('delete')
}
