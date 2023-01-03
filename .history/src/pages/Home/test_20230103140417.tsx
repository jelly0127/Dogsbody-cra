import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-fade'

// Import Swiper styles
import 'swiper/css'
export default function Test() {
  const mySwiper = new Swiper('.swiper-container', {
    on: {
      init: function () {
        swiperAnimateCache(this) //隐藏动画元素
        swiperAnimate(this) //初始化完成开始动画
      },
      slideChangeTransitionEnd: function () {
        swiperAnimate(this) //每个slide切换结束时也运行当前slide动画
        //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
      }
    }
  })
  return (
    <Swiper modules={[EffectFade]} effect="fade">
      {[1, 2, 3].map((i, el) => {
        return <SwiperSlide key={i}>Slide {el}</SwiperSlide>
      })}
    </Swiper>
  )
}
