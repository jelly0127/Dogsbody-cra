import React, { useEffect, useState } from 'react'

export default function Hearder() {
  const [Width, setWidth] = useState(0)

  const resizeUpdate = (e: any) => {
    // 通过事件对象获取浏览器窗口的高度
    const w = e.target.innerWidth
    setWidth(w)
  }

  useEffect(() => {
    // 页面刚加载完成后获取浏览器窗口的大小
    const w = window.innerWidth
    setWidth(w)

    // 页面变化时获取浏览器窗口的大小
    window.addEventListener('resize', resizeUpdate)

    return () => {
      // 组件销毁时移除监听事件
      window.removeEventListener('resize', resizeUpdate)
    }
  }, [])

  return <div>浏览器的宽度为：{Width}</div>
}
