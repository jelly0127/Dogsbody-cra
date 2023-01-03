import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectFade } from 'swiper'
import 'swiper/css'
import 'swiper/components/effect-fade/effect-fade.scss'

SwiperCore.use([EffectFade])
export default function Test() {
  return (
    <Swiper effect="fade">
      {[1, 2, 3].map((i, el) => {
        return <SwiperSlide key={i}>Slide {el}</SwiperSlide>
      })}
    </Swiper>
  )
}
