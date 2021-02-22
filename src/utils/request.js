import axios from 'axios'
import {
  ElNotification as Notification,
  ElMessageBox as MessageBox,
  ElMessage as Message
} from 'element-plus'
// import { getToken, setStatus, getStatus } from '@/utils/auth'
// import errorCode from '@/utils/errorCode' // 统一的错误提示

// axios.defaults.headers['Content-Type'] = 'application/jsoncharset=utf-8'

// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.BASE_URL + import.meta.env.BASE_API, // url = base url + request url
  timeout: 30000 // 请求超时
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['Authorization'] = 'Bearer ' + getToken()
    }
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 响应器拦截
service.interceptors.response.use(
  response => {
    const res = response.data
    const code = res.code || 200
    const msg = errorCode[code] || res.message || errorCode.default
    if (code === 'S0003') {
      const hasShowMessage = getStatus()
      if (!hasShowMessage) {
        setStatus(true)
        MessageBox.alert('登录状态已过期，请重新登录。', '系统提示', {
          confirmButtonText: '重新登录',
          type: 'warning',
          showClose: false
        }).then(() => {
          setStatus(false)
          // store.dispatch('user/resetToken').then(() => {
          //     location.reload()
          // })
        })
      }
    } else if (Number(code) === 500) {
      Message({ message: msg, type: 'error' })
      return Promise.reject(new Error(msg || 'Error'))
    } else if (Number(code) !== 200) {
      Notification.error({ title: msg })
      return Promise.reject(res)
    } else {
      return Promise.resolve(res.data)
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
