import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-fade'

// Import Swiper styles
import 'swiper/css'
export default function Test() {
  return (
    <Swiper modules={[EffectFade]} effect="fade">
      {[1, 2, 3].map((i, el) => {
        return <SwiperSlide>Slide {el}</SwiperSlide>
      })}
    </Swiper>
  )
}
