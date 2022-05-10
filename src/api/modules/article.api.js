// 文章相关
export default ({ request, baseURL }) => ({
  // 文章点赞
  articlePraise(params) {
    return request({
      url: `${baseURL}/artLiked/do`,
      method: 'GET',
      params
    })
  }
})
