import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
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
