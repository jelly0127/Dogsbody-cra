import http from './http'

/**
 * 获取首页列表
 */
export const getData = (id: any) => {
  return new Promise((resolve, reject) => {
    http('get', '/bolg/{id}', id).then(
      (res) => {
        resolve(res)
      },
      (error) => {
        reject(error)
      }
    )
  })
}
