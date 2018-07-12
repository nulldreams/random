import Vuex from 'vuex'
import mutations from './mutations'
let audio = undefined

if (process.browser) {
  audio = new Audio()
}

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      audio
    },
    mutations
  })
}

export default createStore