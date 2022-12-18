<template>
  <div
    data-scroll-container
    class="text-white bg-black px-5 lg:px-0"
  >
    <section
      id="home_logo"
      data-scroll-section
      class="min-h-screen w-full flex items-center"
    >
      <bb-logo class="mx-auto" />
    </section>
    
    <sections-description />
    
    <sections-members />
    
    <sections-video />

    <section
      data-scroll-section
      class="flex w-full justify-center pt-20"
    >
      <golden-crown-transition
        id="crown_video"
        class-props="w-14 h-14"
      />
    </section>

    <section
      data-scroll-section
      id="concert_examples"
      class="container mx-auto pb-20"
    >
      <h3 class="text-4xl font-bold teko text-center pb-20">
        King of Kpop, Kpop Emperor, Idol of Idols
      </h3>
      <div class="space-y-10 lg:space-y-0">

        <div
          data-scroll
          data-scroll-speed="1"
          class="relative"
        >
          <div
            data-scroll
            data-scroll-delay="0.1"
            class="space-y-2"
          >
            <iframe
              ref="iframe"
              class="w-full h-full max-w-2xl object-cover aspect-video mx-auto lg:mr-auto lg:ml-0 z-10" 
              src="https://www.youtube.com/embed/4x9C31ECfRM?autoplay=1" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            >
            </iframe>
            <p class="font-bold md:text-xl text-center lg:text-left">
              BIGBANG - BANG BANG BANG<br>
              Mama 2015
            </p>
          </div>
          <p
            data-scroll
            data-scroll-speed="3"
            class="hidden lg:block absolute bottom-40 right-40 sansita text-3xl opacity-60 drop-shadow-[0_35px_35px_rgba(255,255,255,0.50)]"
          >
            They have so many names
          </p>
        </div>

        <div
          data-scroll
          data-scroll-speed="1"
          class="relative"
        >
          <p
            data-scroll
            data-scroll-speed="3"
            class="hidden lg:block absolute top-20 bottom-0 left-0 sansita text-3xl opacity-60 drop-shadow-[0_35px_35px_rgba(255,255,255,0.50)]"
          >
            They gave so many memories
          </p>
          <div
            data-scroll
            data-scroll-delay="0.1"
            class="space-y-2"
          >
            <iframe
              ref="iframe"
              class="w-full h-full max-w-2xl object-cover aspect-video mx-auto lg:ml-auto lg:mr-0 z-10" 
              src="https://www.youtube.com/embed/bGZZxgixkew?autoplay=1" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            >
            </iframe>
            <p class="font-bold md:text-xl text-center lg:text-right">
              BIGBANG - LOSER + BAE BAE + BANG BANG BANG<br>
              Mama 2015
            </p>
          </div>
        </div>

        <p
          data-scroll
          data-scroll-speed="3"
          class="hidden lg:block mx-auto text-center sansita text-3xl opacity-60 drop-shadow-[0_35px_35px_rgba(255,255,255,0.50)]"
        >
          They wrote a part of kpop history
        </p>

        <div
          data-scroll
          data-scroll-speed="1"
          class="relative"
        >
          <div
            data-scroll
            data-scroll-delay="0.1"
            class="space-y-2"
          >
            <iframe
              ref="iframe"
              class="w-full h-full max-w-2xl object-cover aspect-video mx-auto lg:mr-auto lg:ml-0 z-10" 
              src="https://www.youtube.com/embed/1F3HKthaaIA?autoplay=1" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            >
            </iframe>
            <p class="font-bold md:text-xl text-center lg:text-left">
              BIGBANG | Mama Performances
            </p>
          </div>
          <p
            data-scroll
            data-scroll-speed="3"
            class="hidden lg:block absolute bottom-40 right-40 sansita text-3xl opacity-60 drop-shadow-[0_35px_35px_rgba(255,255,255,0.50)]"
          >
            And they becames legends
          </p>
        </div>

      </div>
    </section>
    
    <section
      data-scroll-section
      id="medias"
      class="container mx-auto pb-20 lg:py-20"
    >
      <h3 class="text-4xl font-bold teko text-center pb-14 lg:pb-20">
        MEDIAS
      </h3>
      <div class="space-y-10">
        <div class="flex flex-wrap gap-10 justify-center mx-auto">
          <social-link
            v-for="social in socials"
            :key="social.name"
            :name="social.name"
            :link="social.link"
            :icon="social.icon"
          />
        </div>
        <div class="flex flex-wrap gap-10 justify-center mx-auto">
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

    <section
      id="disclaimer"
      class="container mx-auto pb-20 lg:py-20 lg:pb-40"
      data-scroll-section
    >
      <h3 class="text-4xl font-bold teko text-center pb-10">
        DISCLAIMER
      </h3>
      <p class="text-center text-xl">
        This website is not affliate to YG Entertainment or any member (or ex-member) of BIGBANG.<br>
        It's a fanmade on the theme of BIGBANG for web development training.
      </p>
    </section>
  </div>
</template>

<script>
  import 'animate.css';
  
  export default {
    name: 'Bigbang Landing Page',

    data() {
      return {
        socials: [
          {
            name: 'Youtube',
            link: 'https://www.youtube.com/channel/UCzw-C7fNfs018R1FzIKnlaA',
            icon: 'icons-youtube'
          },
          {
            name: 'Weibo',
            link: 'https://weibo.com/u/2809310870',
            icon: 'icons-weibo'
          },
          {
            name: 'Facebook',
            link: 'https://www.facebook.com/BIGBANG/',
            icon: 'icons-facebook'
          },
          {
            name: 'Twitter',
            link: 'https://twitter.com/YG_GlobalVIP',
            icon: 'icons-twitter'
          },
        ],
        streaming: [
          {
            name: 'YT Music',
            link: 'https://music.youtube.com/channel/UCI5OIwx9z32Zurb8t4Umzwg',
            icon: 'icons-youtube-music'
          },
          {
            name: 'Spotify',
            link: 'https://open.spotify.com/artist/4Kxlr1PRlDKEB0ekOCyHgX',
            icon: 'icons-spotify'
          },
          {
            name: 'Apple Music',
            link: 'https://music.apple.com/fr/artist/bigbang/318754656',
            icon: 'icons-apple-music'
          },
          {
            name: 'Tidal',
            link: 'https://tidal.com/browse/artist/12084',
            icon: 'icons-tidal'
          },
          {
            name: 'Deezer',
            link: 'https://www.deezer.com/fr/artist/65209',
            icon: 'icons-deezer'
          },
        ]
      }
    },

    mounted(){
      this.locomotiveScrollInit();
    },

    methods: {
      locomotiveScrollInit() {
        this.scroll = new this.$LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]'),
          smooth: true
        })
      },
    }
  }
</script>