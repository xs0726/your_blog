// 用户信息修改
export default ({ request, baseURL }) => ({
  // 上传头像
  uploadAvatar(data) {
    return request({
      url: `${baseURL}/video/uploadHeadShot`,
      method: 'POST',
      data
    })
  }
})
