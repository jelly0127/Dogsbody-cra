import axios from 'axios'

const instance = axios.create({
  // 设置超时时间,单位毫秒
  timeout: 1000 //即1秒
})
