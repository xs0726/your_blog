import { userLogin } from '@/api/login'
import router from "../../router";


export default {
    namespaced: true,
    state: () => ({
        token: localStorage.getItem('BLOG_USER_TOKEN') || '',
        userInfo: JSON.parse(localStorage.getItem('BLOG_USER_INFO')) || null,
        scroll: false
    }),
    mutations: {
        setToken (state, token) {
            state.token =  token
            localStorage.setItem('BLOG_USER_TOKEN', token)
        },
        setUserInfo (state, payload) {
            state.userInfo = payload
            localStorage.setItem('BLOG_USER_INFO', JSON.stringify(payload))
        },
        setScroll (state, payload) {
            state.scroll = payload
        }
    },
    actions: {
        login ({ commit }, userinfo) {
            return new Promise((resolve, reject) => {
                userLogin(userinfo)
                    .then(res => {
                        if (res.code === 200) {
                            commit('setToken', res.data.token)
                            commit('setUserInfo', res.data.user)
                            router.replace('/')
                        }
                        resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        }
    }
}
