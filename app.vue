<template>
  <div data-scroll-container class="text-white bg-black px-5 lg:px-0">
    <section data-scroll-section id="home_logo" class="min-h-screen w-full flex items-center">
      <bb-logo class="mx-auto"/>
    </section>

    <section data-scroll-section data-scroll-speed="-8" data-scroll-position="top" id="description_section" class="container mx-auto min-h-[70vh] lg:px-20">
      <icons-bigbang-crown id="crown_description" class="hidden w-14 h-14 mx-auto"/>
      <h3 id="title_description" class="hidden text-4xl font-bold font-[Teko] text-center pb-14 lg:pb-20">
        WHO ARE THEY?
      </h3>
      <p id="description" class="hidden leading-relaxed text-lg lg:text-xl mx-auto">
        Bigbang est un groupe de cinq membres composé de G-Dragon, T.O.P, Taeyang, Daesung et Seungri. Depuis leur formation en 2006, ils ont connu un immense succès en Corée du Sud et à l'international grâce à leur musique unique et à leur talent pour la danse. 
        <br><br>
        Bigbang a remporté de nombreux prix, notamment aux Mnet Asian Music Awards et aux Seoul Music Awards, ainsi que le prix "World's Best Group" aux World Music Awards en 2012. Leur album "MADE" a également atteint la première place du classement Billboard World Albums Chart. Bigbang est considéré comme l'un des groupes les plus influents et populaires de la Kpop.
        <br><br>
        Après un hiatus de près de 4 ans, le groupe est revenu avec un nouveau single "Still Life", qui a atteint la première place du classement Gaon Digital Chart et leur à permis d'obtenir le prix "Best Vocal Performance (Groupe)" décerné au MAMA Awards 2022.
      </p>
    </section>

    <members-section />

    <video-section id="last_music_video" />

    <section data-scroll-section id="crown_separate" class="flex w-full justify-center pt-20">
      <icons-bigbang-crown class="w-14 h-14"/>
    </section>

    <section data-scroll-section id="concert_examples" class="container mx-auto pb-20">
      <h3 class="text-4xl font-bold font-[Teko] text-center pb-20">
        King of Kpop, Kpop Emperor, Idol of Idols
      </h3>
      <div class="space-y-10 lg:space-y-0">

        <div data-scroll data-scroll-speed="3" class="relative">
          <div data-scroll data-scroll-delay="0.1" class="space-y-2">
            <iframe
              ref="iframe"
              class="w-full h-full max-w-2xl object-cover aspect-video mx-auto lg:mr-auto lg:ml-0 z-10" 
              src="https://www.youtube.com/embed/4x9C31ECfRM" 
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
          <p data-scroll data-scroll-speed="5" class="hidden lg:block absolute bottom-40 right-40 sansita text-3xl opacity-60">They have so many names</p>
        </div>

        <!-- <p data-scroll data-scroll-speed="5" class="mx-auto text-center sansita text-3xl opacity-60">They gave so many memories</p> -->

        <div data-scroll data-scroll-speed="3" class="relative">
          <p data-scroll data-scroll-speed="5" class="hidden lg:block absolute top-20 bottom-0 left-0 sansita text-3xl opacity-60">They gave so many memories</p>
          <div data-scroll data-scroll-delay="0.1" class="space-y-2">
            <iframe
              ref="iframe"
              class="w-full h-full max-w-2xl object-cover aspect-video mx-auto lg:ml-auto lg:mr-0 z-10" 
              src="https://www.youtube.com/embed/bGZZxgixkew" 
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

        <p data-scroll data-scroll-speed="5" class="hidden lg:block mx-auto text-center sansita text-3xl opacity-60">They wrote a part of kpop history</p>

        <div data-scroll data-scroll-speed="3" class="relative">
          <div data-scroll data-scroll-delay="0.1" class="space-y-2">
            <iframe
              ref="iframe"
              class="w-full h-full max-w-2xl object-cover aspect-video mx-auto lg:mr-auto lg:ml-0 z-10" 
              src="https://www.youtube.com/embed/1F3HKthaaIA" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            >
            </iframe>
            <p class="font-bold md:text-xl text-center lg:text-left">
              BIGBANG | Mama Performances
            </p>
          </div>
          <p data-scroll data-scroll-speed="5" class="hidden lg:block absolute bottom-40 right-40 sansita text-3xl opacity-60">And they becames legends</p>
        </div>

      </div>
    </section>
    
    <section data-scroll-section id="medias" class="container mx-auto pb-20 lg:py-20">
      <h3 class="text-4xl font-bold font-[Teko] text-center pb-14 lg:pb-20">
        MEDIAS
      </h3>
      <div class="space-y-10">
        <div class="flex flex-wrap gap-10 justify-center mx-auto">
          <a href="https://www.youtube.com/channel/UCzw-C7fNfs018R1FzIKnlaA" class="flex space-x-2 jusce items-center transition-all duration-500 ease-in-out hover:text-red-700">
            <icons-youtube class="w-8 h-8"/>
            <p class="font-bold font-[Teko] pt-1.5 text-xl">Youtube</p>
          </a>
          <a href="https://www.facebook.com/BIGBANG/" class="flex space-x-2 jusce items-center transition-all duration-500 ease-in-out hover:text-blue-700">
            <icons-facebook class="w-8 h-8"/>
            <p class="font-bold font-[Teko] pt-1.5 text-xl">Facebook</p>
          </a>
          <a href="https://twitter.com/YG_GlobalVIP" class="flex space-x-2 jusce items-center transition-all duration-500 ease-in-out hover:text-blue-400">
            <icons-twitter class="w-8 h-8"/>
            <p class="font-bold font-[Teko] pt-1.5 text-xl">Twitter</p>
          </a>
        </div>
        <div class="flex flex-wrap gap-10 justify-center mx-auto">
          <a href="https://music.youtube.com/channel/UCI5OIwx9z32Zurb8t4Umzwg" class="flex space-x-2 jusce items-center transition-all duration-500 ease-in-out hover:text-red-700">
            <icons-youtube-music class="w-8 h-8"/>
            <p class="font-bold font-[Teko] pt-1.5 text-xl">YT Music</p>
          </a>
          <a href="https://open.spotify.com/artist/4Kxlr1PRlDKEB0ekOCyHgX" class="flex space-x-2 jusce items-center transition-all duration-500 ease-in-out hover:text-green-600">
            <icons-spotify class="w-8 h-8"/>
            <p class="font-bold font-[Teko] pt-1.5 text-xl">Spotify</p>
          </a>
          <a href="https://music.apple.com/fr/artist/bigbang/318754656" class="flex space-x-2 jusce items-center transition-all duration-500 ease-in-out hover:text-purple-400">
            <icons-apple-music class="w-8 h-8"/>
            <p class="font-bold font-[Teko] pt-1.5 text-xl">Apple Music</p>
          </a>
          <a href="https://tidal.com/browse/artist/12084" class="flex space-x-2 jusce items-center transition-all duration-500 ease-in-out hover:text-blue-900">
            <icons-tidal class="w-8 h-8"/>
            <p class="font-bold font-[Teko] pt-1.5 text-xl">Tidal</p>
          </a>
          <a href="https://www.deezer.com/fr/artist/65209" class="flex space-x-2 jusce items-center group">
            <icons-deezer class="w-8 h-8 group-hover:text-red-400 transition-all duration-500 ease-in-out"/>
            <p class="font-bold font-[Teko] pt-1.5 text-xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-cyan-600 transition-all duration-500 ease-in-out">Deezer</p>
          </a>
        </div>
      </div>
    </section>

    <section data-scroll-section id="disclaimer" class="container mx-auto pb-20 lg:py-20">
      <h3 class="text-4xl font-bold font-[Teko] text-center pb-10">
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
    name: 'Bigbang',

    mounted(){
      this.locomotiveScrollInit()
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', "https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js")
      document.head.appendChild(recaptchaScript)

      
      this.scroll.on('scroll', (instance) => {
        if (instance.scroll.y > 100) {
          document.querySelector('#crown_description').classList.remove('hidden')
          document.querySelector('#crown_description').classList.add('animate__animated', 'animate__fadeInDown')
          document.querySelector('#crown_description').style.setProperty('--animate-duration', '1.5s');
          document.querySelector('#title_description').classList.remove('hidden')
          document.querySelector('#title_description').classList.add('animate__animated', 'animate__fadeInUp')
          document.querySelector('#description').classList.remove('hidden')
          document.querySelector('#description').classList.add('animate__animated', 'animate__fadeInUp')
        }
      })

    },

    methods: {
      locomotiveScrollInit() {
        this.scroll = new this.$LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]'),
          smooth: true
        })

        // this.scroll.stop()
      },
    }
  }
</script>

<style>
  /* use Sansita Swashed police */
  @import url('https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@400;700&display=swap');
  .sansita {
    font-family: 'Sansita Swashed', cursive;
  }
</style>