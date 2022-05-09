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
export const getFavArc = () => {
    return request({
        url: '/article/getFavArc',
        method: 'get',
    })
}
// 最新文章
export const getLastArc = () => {
    return request({
        url: '/article/getLastArc',
        method: 'get',
    })
}
