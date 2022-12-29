<template>
  <div data-scroll-container class="bg-black px-5 text-white lg:px-0">
    <!-- HOME LOGO ANIMATION -->
    <section
      id="home_logo"
      data-scroll-section
      class="flex min-h-screen w-full items-center"
    >
      <bb-logo class="mx-auto" />
    </section>

    <!-- BB DESCRIPTION -->
    <sections-description />

    <!-- BB MEMBERS DESCRIPTION -->
    <sections-members />

    <!-- VIDEO -->
    <sections-video />

    <!-- CONCERT EXAMPLE -->
    <section
      data-scroll-section
      id="concert_examples"
      class="container mx-auto pb-20"
    >
      <div>
        <div class="flex w-full justify-center pt-20">
          <golden-crown-transition id="crown_video" class-props="w-14 h-14" />
        </div>
        <h3 class="teko pb-20 text-center text-4xl font-bold">
          King of Kpop, Kpop Emperor, Idol of Idols
        </h3>
      </div>
      <div class="space-y-10 lg:space-y-0">
        <div data-scroll data-scroll-speed="1" class="relative">
          <video-presentation
            video-link="https://www.youtube.com/embed/4x9C31ECfRM?autoplay=1"
            video-title="BIGBANG - BANG BANG BANG (Mama 2015)"
          />

          <p
            data-scroll
            data-scroll-speed="3"
            class="sansita absolute bottom-40 right-40 hidden text-3xl opacity-60 drop-shadow-[0_35px_35px_rgba(255,255,255,0.50)] lg:block"
          >
            They gave so many names
          </p>
        </div>

        <div data-scroll data-scroll-speed="1" class="relative">
          <video-presentation
            video-link="https://www.youtube.com/embed/bGZZxgixkew?autoplay=1"
            video-title="BIGBANG - LOSER + BAE BAE + BANG BANG BANG (Mama 2015)"
            rightAlign
          />
          <p
            data-scroll
            data-scroll-speed="3"
            class="sansita absolute bottom-40 left-40 hidden text-3xl opacity-60 drop-shadow-[0_35px_35px_rgba(255,255,255,0.50)] lg:block"
          >
            The best group from the world
          </p>
        </div>

        <div data-scroll data-scroll-speed="1" class="relative">
          <video-presentation
            video-link="https://www.youtube.com/embed/1F3HKthaaIA?autoplay=1"
            video-title="BIGBANG | Mama Performances"
          />
          <p
            data-scroll
            data-scroll-speed="3"
            class="sansita absolute bottom-40 right-40 hidden text-3xl opacity-60 drop-shadow-[0_35px_35px_rgba(255,255,255,0.50)] lg:block"
          >
            And they becames legends
          </p>
        </div>
      </div>
    </section>

    <!-- MEDIAS -->
    <section
      data-scroll-section
      id="medias"
      class="container mx-auto pb-20 lg:py-20"
    >
      <h3 class="teko pb-14 text-center text-4xl font-bold lg:pb-20">MEDIAS</h3>
      <div class="space-y-10">
        <div class="mx-auto flex flex-wrap justify-center gap-10">
          <social-link
            v-for="social in socials"
            :key="social.name"
            :name="social.name"
            :link="social.link"
            :icon="social.icon"
          />
        </div>
        <div class="mx-auto flex flex-wrap justify-center gap-10">
          <social-link
            v-for="social in streaming"
            :key="social.name"
            :name="social.name"
            :link="social.link"
            :icon="social.icon"
          />
        </div>
      </div>
    </section>

    <!-- DISCLAIMER -->
    <section
      id="disclaimer"
      class="container mx-auto pb-20 lg:py-20 lg:pb-40"
      data-scroll-section
    >
      <h3 class="teko pb-10 text-center text-4xl font-bold">DISCLAIMER</h3>
      <p class="text-center text-xl">
        This website is not affliate to YG Entertainment or any member (or
        ex-member) of BIGBANG.<br />
        It's a fanmade on the theme of BIGBANG for web development training.
      </p>
    </section>
  </div>
</template>

<script>
import "animate.css";

export default {
  name: "Bigbang Landing Page",

  data() {
    return {
      socials: [
        {
          name: "Youtube",
          link: "https://www.youtube.com/channel/UCzw-C7fNfs018R1FzIKnlaA",
          icon: "icons-youtube",
        },
        {
          name: "Weibo",
          link: "https://weibo.com/u/2809310870",
          icon: "icons-weibo",
        },
        {
          name: "Facebook",
          link: "https://www.facebook.com/BIGBANG/",
          icon: "icons-facebook",
        },
        {
          name: "Twitter",
          link: "https://twitter.com/YG_GlobalVIP",
          icon: "icons-twitter",
        },
      ],
      streaming: [
        {
          name: "YT Music",
          link: "https://music.youtube.com/channel/UCI5OIwx9z32Zurb8t4Umzwg",
          icon: "icons-youtube-music",
        },
        {
          name: "Spotify",
          link: "https://open.spotify.com/artist/4Kxlr1PRlDKEB0ekOCyHgX",
          icon: "icons-spotify",
        },
        {
          name: "Apple Music",
          link: "https://music.apple.com/fr/artist/bigbang/318754656",
          icon: "icons-apple-music",
        },
        {
          name: "Tidal",
          link: "https://tidal.com/browse/artist/12084",
          icon: "icons-tidal",
        },
        {
          name: "Deezer",
          link: "https://www.deezer.com/fr/artist/65209",
          icon: "icons-deezer",
        },
      ],
    };
  },

  mounted() {
    this.locomotiveScrollInit();
  },

  methods: {
    locomotiveScrollInit() {
      this.scroll = new this.$LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
      });
    },
  },
};
</script>
