import { createStore } from 'vuex'

const store = createStore({
  state: {
    name: 'Vuex'
  },
  modules: {
    slickSlider: require('./modules/slick-slider').default
  }
})

export default store
