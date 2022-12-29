<template>
  <section id="last_music_video" data-scroll-section>
    <h3 class="teko text-center text-4xl font-bold">STILL LIFE</h3>
    <div class="relative min-h-screen w-full">
      <iframe
        ref="iframe"
        class="absolute inset-0 h-full w-full object-cover lg:p-10 xl:px-20"
        src="https://www.youtube.com/embed/eN5mG_yMDiM?rel=0&enablejsapi=1&controls=0&loop=1&playlist=eN5mG_yMDiM&showinfo=0&autoplay=1&modestbranding=1&iv_load_policy=3"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>

      <div
        id="filtre"
        class="absolute inset-0 z-40 flex items-center"
        :class="muted ? 'bg-black/70' : 'bg-transparent'"
      >
        <div
          v-if="muted"
          class="mx-auto space-y-2 text-center text-4xl font-bold transition-all duration-300 ease-in-out md:text-7xl lg:text-9xl xl:space-y-6 2xl:space-y-10 2xl:text-[150px]"
        >
          <div class="flex flex-col space-y-1.5 md:space-y-2.5 lg:space-y-5">
            <div
              class="mx-auto h-1.5 bg-white px-14 md:h-2.5 md:px-28 lg:h-4 lg:px-48 2xl:px-56"
            ></div>
            <div
              class="mx-auto h-1.5 bg-white px-14 md:h-2.5 md:px-28 lg:h-4 lg:px-48 2xl:px-56"
            ></div>
            <div
              class="mx-auto h-1.5 bg-white px-14 md:h-2.5 md:px-28 lg:h-4 lg:px-48 2xl:px-56"
            ></div>
            <div
              class="mx-auto h-1.5 bg-white px-14 md:h-2.5 md:px-28 lg:h-4 lg:px-48 2xl:px-56"
            ></div>
            <div
              class="mx-auto h-1.5 bg-white px-14 md:h-2.5 md:px-28 lg:h-4 lg:px-48 2xl:px-56"
            ></div>
          </div>
          <p
            class="teko text-center text-4xl font-bold md:text-7xl lg:text-9xl 2xl:text-[230px]"
          >
            BIGBANG
          </p>
        </div>
      </div>

      <div
        class="absolute top-10 z-50 overflow-hidden font-[Roboto] text-xl font-bold lg:right-5"
      >
        <div
          class="flex flex-row items-center space-x-5 lg:flex-col lg:space-x-0 lg:space-y-5"
        >
          <button id="playButton" @click="play()">
            <IconsPlay class="h-10 w-10" />
          </button>

          <button id="resetButton" @click="resetTimer()">
            <IconsReset class="h-10 w-10" />
          </button>

          <button id="muteButton" @click="unmute()">
            <IconsSongOff v-if="muted" class="h-10 w-10" />
            <IconsSongOn v-else class="h-10 w-10" />
          </button>

          <input
            id="volumeSlider"
            class="volume bg-transparent focus:outline-none"
            v-if="!muted"
            step="10"
            type="range"
            min="0"
            max="100"
            v-model="volume"
            @change="setVolume(volume)"
          />
        </div>
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
      volume: 30,
    };
  },

  mounted() {
    const iframe = this.$refs.iframe;
    iframe.addEventListener("load", () => {
      if (this.test === 0) {
        setTimeout(() => {
          console.log("it's show time");
          iframe.contentWindow.postMessage(
            '{"event":"command","func":"setVolume","args":[' +
              this.volume +
              "]}",
            "*"
          );
          iframe.contentWindow.postMessage(
            '{"event":"command","func":"mute","args":""}',
            "*"
          );
          iframe.contentWindow.postMessage(
            '{"event":"command","func":"playVideo","args":""}',
            "*"
          );
          this.test = 1;
          this.muted = true;
        }, 1000);

        iframe.contentWindow.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          "*"
        );
      }
    });
  },

  methods: {
    play() {
      const iframe = this.$refs.iframe;
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
      if (this.muted) {
        this.unmute();
      }
    },

    unmute() {
      const iframe = this.$refs.iframe;
      // if iframe is muted, unmute it
      if (this.muted) {
        iframe.contentWindow.postMessage(
          '{"event":"command","func":"unMute","args":""}',
          "*"
        );
        this.muted = false;
      } else {
        iframe.contentWindow.postMessage(
          '{"event":"command","func":"mute","args":""}',
          "*"
        );
        this.muted = true;
      }
    },

    setVolume(volume) {
      const iframe = this.$refs.iframe;
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"setVolume","args":[' + volume + "]}",
        "*"
      );
    },

    // post message to iframe to set timer
    resetTimer() {
      const iframe = this.$refs.iframe;
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"seekTo","args":[0]}',
        "*"
      );
      if (this.muted) {
        this.unmute();
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Teko:wght@600&display=swap");
</style>

<style>
@media (min-width: 1024px) {
  .volume {
    -webkit-appearance: slider-vertical; /* Chromium */
    width: 8px;
    height: 175px;
    padding: 0 5px;
  }
}
</style>
