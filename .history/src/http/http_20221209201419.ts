import axios from 'axios'

const instance = axios.create({
  // 设置超时时间,单位毫秒
  timeout: 1000 //即1秒
})
instance.interceptors.request.use(
  function (config) {
    // 登录时就已经把token存到了cookie中
    const token = cookie.get('token')
    if (token) {
      config.headers.authorization = token
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
