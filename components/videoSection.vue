<template>
  <section class="min-h-screen w-full relative">
    <iframe
      ref="iframe"
      class="absolute inset-0 xl:p-20 w-full h-full object-cover" 
      src="https://www.youtube.com/embed/eN5mG_yMDiM?enablejsapi=1&controls=0&loop=1&playlist=eN5mG_yMDiM" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
    >
    </iframe>
    <div 
      class="inset-0 absolute flex items-center intro"
      :class="muted ? 'bg-black/70':'bg-transparent'"
    >
      <div v-if="muted" class="text-4xl md:text-7xl lg:text-9xl 2xl:text-[150px] font-bold text-center space-y-2 xl:space-y-6 2xl:space-y-10 mx-auto transition-all duration-300 ease-in-out">
        <div class="flex flex-col space-y-1.5 md:space-y-2.5 lg:space-y-5">
          <div class="bg-white h-1.5 md:h-2.5 lg:h-4 px-14 md:px-28 lg:px-48 2xl:px-56 mx-auto"></div>
          <div class="bg-white h-1.5 md:h-2.5 lg:h-4 px-14 md:px-28 lg:px-48 2xl:px-56 mx-auto"></div>
          <div class="bg-white h-1.5 md:h-2.5 lg:h-4 px-14 md:px-28 lg:px-48 2xl:px-56 mx-auto"></div>
          <div class="bg-white h-1.5 md:h-2.5 lg:h-4 px-14 md:px-28 lg:px-48 2xl:px-56 mx-auto"></div>
          <div class="bg-white h-1.5 md:h-2.5 lg:h-4 px-14 md:px-28 lg:px-48 2xl:px-56 mx-auto"></div>
        </div>
        <p class="font-[Teko] text-4xl md:text-7xl lg:text-9xl 2xl:text-[230px] font-bold text-center">BIGBANG</p>
      </div>

    </div>
    <div class="absolute top-5 flex items-center w-full px-5 lg:px-10 xl:px-20 text-xl font-bold font-[Roboto] justify-end">
      <!-- <p class="transition-all duration-300 ease-in-out hidden xl:block">THEIR LATEST RELEASE</p>
      <p>STILL LIFE</p> -->
      <div class="z-10 flex space-x-5 items-center">
        <input
          v-if="!muted"
          step="10"
          type="range"
          min="0"
          max="100"
          v-model="volume"
          @change="setVolume(volume)"
        />
        <button @click="unmute()" class="text-base hover:text-red-700">
          <IconsSongOff v-if="muted" class="w-10 h-10" />
          <IconsSongOn v-else class="w-10 h-10"/>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        test: 0,
        muted: true,
        volume: 30
      }
    },

    mounted() {
      const iframe = this.$refs.iframe;
      iframe.addEventListener('load', () => {
        if(this.test === 0) {
          setTimeout(() => {
            console.log("it's show time")
            iframe.contentWindow.postMessage('{"event":"command","func":"setVolume","args":['+this.volume+']}', '*')
            iframe.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*')
            iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
            this.test = 1
            this.muted = true
          }, 1000)
          
          iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
        }
      });
    },

    methods: {
      unmute() {
        const iframe = this.$refs.iframe;
        // if iframe is muted, unmute it
        if(this.muted) {
          iframe.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*')
          this.muted = false
        } else {
          iframe.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*')
          this.muted = true
        }
      },
      setVolume(volume){
        const iframe = this.$refs.iframe;
        iframe.contentWindow.postMessage('{"event":"command","func":"setVolume","args":['+volume+']}', '*')
      }
    }
  }
</script>

<style> @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Teko:wght@600&display=swap'); </style>