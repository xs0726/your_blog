import request from "./request";
import {randomWord} from "../utils/util";

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
        headers: {traceId: randomWord(false, 32)},
        method: 'post',
        data
    })
}

export const verification =  (data) => {
    return request({
        url: '/user/verification',
        method: 'post',
        data
    })
}

export const userRegister = (data) => {
    return request({
        url: '/user/register',
        headers: {traceId: randomWord(false, 32)},
        method: 'post',
        data
    })
}
/**
 * @title QQ登录成功后再次请求接口
 * @param {*} data 
 * @returns 
 */
export const loginBindQQ = (data) => {
    return request({
        url: '/qqAccount/loginBindQQ',
        headers: {traceId: randomWord(false, 32)},
        method: 'post',
        data
    })
}