import store from '../store';
import router from "../router";
import { toRaw} from "vue";


export default function useLogout() {
  // 清除所有登录信息
  delete localStorage.BLOG_USER_TOKEN;
  delete localStorage.BLOG_USER_INFO;
  store.commit("app/setToken", "");
  store.commit("app/setUserInfo", "");
  router.push('/login?callbackurl=' + encodeURIComponent(toRaw(router).currentRoute.value.fullPath) )
}
