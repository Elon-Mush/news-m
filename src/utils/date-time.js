/**
 * 封装自定义 dayjs 日期处理模块
 */
import dayjs from 'dayjs'
import rTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')
dayjs.extend(rTime)

export const relativeTime = value => {
  return dayjs().to(dayjs(value))
}

export const formatTime = (value, format = 'YYYY-MM-DD hh:mm:ss') => {
  return dayjs(value).format(format)
}

export default {
  install (Vue) {
    Vue.filter('relativeTime', relativeTime)
    Vue.filter('formatTime', formatTime)
  }
}
