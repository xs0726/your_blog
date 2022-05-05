import axios from "axios";
import { message } from 'ant-design-vue';
import { randomWord } from "../utils/util";
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API ,
    timeout: 6000
})

service.interceptors.request.use(config => {
    const token = localStorage.BLOG_USER_TOKEN ? localStorage.BLOG_USER_TOKEN : ''
    if (token) {
        config.headers['token'] = token
    }
    config.headers['traceId'] = randomWord(false, 32)
    return config
}, error => {
    return Promise.reject(new Error(error))
})

service.interceptors.response.use(res => {
    const { data, status } = res
    if (status === 200 || status === 201) {
        return data
    } else {
        // message.error('数据库异常,请联系管理员');
        return Promise.reject(new Error(data.message))
    }
}, error => {
    error.response &&  message.error(error.response.data.message || "服务错误，请稍后再试！")
    return Promise.reject(new Error(error.response.data.message))
})

export default service
