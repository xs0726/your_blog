import request from "./request";


export const editPwd = (data) => {
    return request({
        url: '/user/editPwdByPwd',
        method: 'post',
        data
    })
}

export const logout = (data) => {
    return request({
        url: '/user/logout',
        method: 'post',
        data
    })
}

export const loginByGithub = (code) => {
    return request({
        url: `githubAccount/loginByGithub?code=${code}`,
        method: 'get'
    })
}

export const loginByQQ = (code) => {
    return request({
        url: `qqAccount/loginByQQ?code=${code}`,
        method: 'get'
    })
}

// 最热文章
export const getFavArc = (data) => {
    return request({
        url: '/article/getFavArc',
        method: 'post',
        data
    })
}
// 最新文章
export const getLastArc = (data) => {
    return request({
        url: '/article/getLastArc',
        method: 'post',
        data
    })
}
