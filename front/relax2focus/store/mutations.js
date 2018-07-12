const mutations = {
  increment (state) {
    state.counter++
  },
  playTrack (state, track) {
    state.audio.load(track)
    state.audio.play()
  }
}
  
export default mutations