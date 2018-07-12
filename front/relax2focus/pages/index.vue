<template>
  <div class="principal">
    <div class="player">
      <div class="options">
        <div class="left">
            <i data-feather="skip-back"></i>
        </div>
        <div v-show="!pause" class="middle" @click="playSong('https://focusmusic.fm/static/tracks/bardalimov-far-shine.mp3')">
            <i data-feather="play"></i>
        </div>
        <div v-show="pause" class="middle" @click="pauseSong('https://focusmusic.fm/static/tracks/bardalimov-far-shine.mp3')">
            <i data-feather="pause"></i>
        </div>
        <div class="right">
            <i data-feather="skip-forward"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
 .principal {
   display: flex;
   justify-content: center;
   align-items: center;

   height: 100vh;
 }
 .principal .player {
   width: 400px;
   height: 400px;
 }
 .principal .player .options {
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   height: 100%;
 }
 .principal .player .options .left {
   height: 80px;
   width: 80px;

   display: flex;
   justify-content: center;
   align-items: center;
 }
 .principal .player .options .middle {
   background: #a29bfe;
   border-radius: 50%;
   height: 150px;
   width: 150px;

   display: flex;
   justify-content: center;
   align-items: center;
 }
 .principal .player .options .right {
   height: 80px;
   width: 80px;

   display: flex;
   justify-content: center;
   align-items: center;
 }
 .principal .player .options .middle .feather {
   stroke: #fff;
   width: 70px;
   height: 70px;
 }
 .principal .player .options .right .feather, .principal .player .options .left .feather {
   stroke: #a29bfe;
   width: 30px;
   height: 30px;
 }
</style>
<script>
export default {
  data () {
    return {
      play: true,
      pause: false,
      audio: undefined
    }
  },
  created() {
    if (process.browser) {
      this.audio = new Audio('https://focusmusic.fm/static/tracks/bardalimov-far-shine.mp3')

      $(function () {
        feather.replace()
      })
    }
  },
  methods: {
    playSong (track) {
      if (track) {
        if (this.pause) {
          return this.audio.play()
        }
        this.audio.src = track

        this.audio.play()
        this.pause = true
      }
    },
    pauseSong (track) {
      if (track) {
        this.pause = false
        // this.audio.src = track

        this.audio.pause()
      }
    }
  }
}
</script>
