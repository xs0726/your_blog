// 文章相关
export default ({ request, baseURL }) => ({
  // 文章点赞
  articlePraise(params) {
    return request({
      url: `${baseURL}/artLiked/do`,
      method: 'GET',
      params
    })
  },

  // 获取当前用户点赞文章
  getArtLiked(){
    return request({
      url: `${baseURL}/artLiked/get`,
      method: 'GET'
    })
  },

  // 浏览文章
  viewArc(params) {
    return request({
      url: `${baseURL}/article/v`,
      method: 'GET',
      params
    })
  },

  // 上传文章图片
  uploadArcImg(params) {
    return request({
      url: `${baseURL}/article/uploadArcPic`,
      method: 'POST',
      data: params
    })
  },

  // 上传文章
  uploadArticle(params) {
    return request({
      url: `${baseURL}/article/issueArc`,
      method: 'POST',
      data: params
    })
  },

  // 文章标签
  getArticleTag(params) {
    return request({
      url: `${baseURL}/labelData/labelData`,
      method: 'GET',
      params
    })
  },

  // 文章列表
  getArticleList(params) {
    return request({
      url: `${baseURL}/article/search/tag`,
      method: 'POST',
      data: params
    })
  },

  // 文章详情
  getArticleDetail(id) {
    return request({
      url: `${baseURL}/article/getArc/${id}/info`,
      method: 'GET'
    })
  }
})
