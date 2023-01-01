import React from 'react'

export default function Hearder() {
  const [height, setHeight] = useState(0)

  const resizeUpdate = (e) => {
    // 通过事件对象获取浏览器窗口的高度
    const h = e.target.innerHeight
    setHeight(h)
  }

  useEffect(() => {
    // 页面刚加载完成后获取浏览器窗口的大小
    const h = window.innerHeight
    setHeight(h)

    // 页面变化时获取浏览器窗口的大小
    window.addEventListener('resize', resizeUpdate)

    return () => {
      // 组件销毁时移除监听事件
      window.removeEventListener('resize', resizeUpdate)
    }
  }, [])

  return <div>浏览器的高度为：{height}</div>
}
