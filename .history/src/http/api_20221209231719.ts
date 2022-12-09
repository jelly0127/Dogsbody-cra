import http from './http'

/**
 * 获取首页列表
 */
export const getData = (id: string | number) => {
  return new Promise((resolve, reject) => {
    http('get', '/bolg/{id}', id).then(
      (res) => {
        resolve(res)
      },
      (error) => {
        console.log('网络异常~', error)
        reject(error)
      }
    )
  })
}
