import SwiperCore, { EffectFade } from 'swiper'
SwiperCore.use([EffectFade])
// 您可以在此处找到运行效果演示。

// 完全淡入淡出效果示例
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectFade } from 'swiper'

import 'swiper/swiper.scss'
import 'swiper/components/effect-fade/effect-fade.scss'

SwiperCore.use([EffectFade])

export default () => {
  return (
    <Swiper effect="fade">
      {[1, 2, 3].map((i, el) => {
        return <SwiperSlide>Slide {el}</SwiperSlide>
      })}
    </Swiper>
  )
}
