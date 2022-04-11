import request from "./request";
import { randomWord } from "../utils/util";

export const getCode = (data) => {
    return request({
        url: '/user/code',
        method: 'get',
        data
    })
}

export const userLogin = (data) => {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}

export const verification = (data) => {
    return request({
        url: '/user/verification',
        method: 'post',
        data
    })
}

export const userRegister = (data) => {
    return request({
        url: '/user/register',
        method: 'post',
        data
    })
}
/**
 * @title QQ登录成功后再次请求接口
 * @param {*} data
 * @returns
 */
export const loginBindQQ = (key) => request({
    url: `/qqAccount/loginBindQQ?code=${key}`,
    method: 'get'
    // data
})

/**
 * @title Github登录成功后再次请求接口
 * @param {*} data
 * @returns
 */
 export const loginBindGithub = (key) => request({
    url: `/githubAccount/loginBindGithub?code=${key}`,
    method: 'get'
    // data
})

/**
 * @title 第三方注册
 * @param {*} data
 * @returns
 */
export const registerByThr = (data) => request({
    url: `/user/registerByThr`,
    method: 'post',
    data
})

export const loginByWeChat = (key) => request({
    url: `weChatAccount/loginByWeChat?code=${key}`,
    method: 'get'
})

export const loginByWeChatBind = (data) => request({
    url: `weChatAccount/loginBindWeChat`,
    method: 'post',
    data
})
