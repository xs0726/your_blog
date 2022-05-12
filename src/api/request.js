import axios from "axios";
import { message } from 'ant-design-vue';
import { randomWord } from "../utils/util";
import useLogout from "../Hooks/useLogout";

export const configDefault = {
    baseURL: process.env.VUE_APP_BASE_API ,
    // withCredentials: true,  //跨域携带cookie
    timeout: 6000
}
const service = axios.create(configDefault)

service.interceptors.request.use(config => {
    const token = localStorage.BLOG_USER_TOKEN ? localStorage.BLOG_USER_TOKEN : ''
    token && (config.headers['token'] = token)
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
        return Promise.reject(new Error(data.msg))
    }
}, error => {
    if (error.response.data.code === 1101) {
        useLogout()
    }
    error.response &&  message.error(error.response.data.msg)
    return Promise.reject(new Error(error.response.data.msg))
})

export default service
