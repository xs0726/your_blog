import store from '../store';



export default function (res) {
    store.commit('app/setToken', res.data.data.token)
    store.commit('app/setUserInfo', res.data.data.user)
}
