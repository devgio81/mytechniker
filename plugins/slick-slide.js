import Vue from 'vue'
import Slick from 'vue-slick'
require('@/assets/css/slick-theme.css')
require('@/assets/css/slick.css')

const SlickSlide = {
  install (Vue, options) {
    Vue.component('slick-slide', Slick)
  }
}

Vue.use(SlickSlide)

export default SlickSlide
