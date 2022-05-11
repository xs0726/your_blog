import store from '../store';

// const store = useStore();

export default function useLogout() {
  // 清除所有登录信息
  delete localStorage.BLOG_USER_TOKEN;
  delete localStorage.BLOG_USER_INFO;
  store.commit("app/setToken", "");
  store.commit("app/setUserInfo", "");
}
