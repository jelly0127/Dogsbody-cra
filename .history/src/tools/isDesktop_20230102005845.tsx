import { useEffect, useState } from 'react'
import isDesktop from '../../.history/src/tools/isDesktop_20230102003927'

//定义size对象
interface WindowSize {
  width: number
  height: number
  isDesktop: boolean
}
const WIDTH = 768
const useWindowSize = () => {
  const [size, setSize] = useState<WindowSize>({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
    isDesktop: document.documentElement.clientWidth > WIDTH ? true : false
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

  if (size.width > WIDTH) return false
  return true
}

export default useWindowSize
