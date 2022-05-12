

// 文章点赞
import {ref} from "vue";
import {forEach, includes} from "lodash";
import $api from '@/api'
import store from '@/store'

export function useLikeArc(data) {
  // 用户点过赞的文章id
  if (store.state.app.token) {
    const likeArcListId = ref([])
    $api.getArtLiked().then(res => {
      if (res.code !== 200) return
      likeArcListId.value = res.data
      forEach(data.value, (item) => {
        item.isLike = includes(likeArcListId.value, item.arcId)
      })
    })
  }
  return data
}

// 进入文章详情
export function useEnterArc(item) {
  let win = window.open(`/home/detail?arcId=${item.arcId}`)
  const loop = setInterval(function () {
    if (win.closed) {
      clearInterval(loop);
    } else {
      win.document.title = item.arcHeadline
    }
  }, 1000);
}

// 浏览文章 5s +1
export function useViewArc(arcId) {
  $api.viewArc({arcId})
}
