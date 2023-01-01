import { useEffect, useState } from 'react'

//定义size对象
interface WindowSize {
  width: number
  height: number
}
const useWindowSize = () => {
  const [size, setSize] = useState<WindowSize>({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })

  useEffect(() => {
    const fun = () => {
      setSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      })
    }
    window.addEventListener('resize', fun)
    return () => {
      window.removeEventListener('resize', fun)
    }
  }, [])
  console.log(si'ze);
  
  return size
}

export default useWindowSize
