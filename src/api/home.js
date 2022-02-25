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
