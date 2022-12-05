<template>
  <div class="text-white bg-black snap-mandatory snap-y px-5 lg:px-0">
    <section id="home_logo" class="min-h-screen w-full flex items-center">
      <div class="space-y-2 xl:space-y-6 2xl:space-y-10 mx-auto">
        <div class="flex flex-col space-y-1.5 md:space-y-2.5 lg:space-y-5">
          <div class="bg-white h-1.5 md:h-2.5 lg:h-4 px-14 md:px-28 lg:px-48 2xl:px-56 mx-auto"></div>
          <div class="bg-white h-1.5 md:h-2.5 lg:h-4 px-14 md:px-28 lg:px-48 2xl:px-56 mx-auto"></div>
          <div class="bg-white h-1.5 md:h-2.5 lg:h-4 px-14 md:px-28 lg:px-48 2xl:px-56 mx-auto"></div>
          <div class="bg-white h-1.5 md:h-2.5 lg:h-4 px-14 md:px-28 lg:px-48 2xl:px-56 mx-auto"></div>
          <div class="bg-white h-1.5 md:h-2.5 lg:h-4 px-14 md:px-28 lg:px-48 2xl:px-56 mx-auto"></div>
        </div>
        <p class="font-[Teko] text-7xl lg:text-9xl 2xl:text-[230px] font-bold text-center">BIGBANG</p>
      </div>
    </section>
    <section id="groupp_description" class="container mx-auto min-h-[50vh] pb-64 px-10 lg:px-20">
      <div class="mx-auto">
        <p class="leading-relaxed text-xl">
          Big Bang, est un boys band de K-pop sud-coréen, originaire de Séoul. Il se composait de cinq membres jusqu'au départ de Seungri en mars 2019. Le groupe est mené par le rappeur G-Dragon. À ses côtés se trouvent Taeyang qu'il connaît depuis son enfance, ainsi que T.O.P et Daesung. À leurs débuts en 2006, ils sont considérés comme étant la nouvelle figure montante de leur label, YG Entertainment. Leurs débuts sont en effet prometteurs, mais c'est à la sortie du single Lies en 2007 qu'ils connaissent véritablement le succès. Le groupe est connu pour sa musique, mais aussi pour le style vestimentaire de ses membres, surtout de leur leader, souvent surpris à des semaines de la mode ainsi que des défilés, devenu célèbre à travers tout le pays et même à l’échelle internationale.
          <br><br>
          En juillet 2017, ils deviennent le premier groupe sud-coréen à avoir neuf vidéos avec cent millions de vues.
          <br><br>
          Big Bang est considéré comme étant les « Rois de la K-pop ». En effet, l'implication des membres dans la composition et la production de leur propre musique, notamment G-Dragon, a valu au groupe le respect et l’éloge de l'industrie musicale.
          <br><br>
          Source: Wikipédia
        </p>
      </div>
    </section>
    <section id="group_members" class="container w-full mx-auto min-h-screen">
      <div class="flex w-full justify-center pb-32">
        <icons-bigbang-crown class="w-14 h-14"/>
      </div>
      <div class="space-y-40">
        <div class="flex flex-col lg:flex-row lg:items-end text-xl gap-10">
          <img
            class="hover:scale-110 transition duration-300 ease-in-out"
            src="@/assets/image/GDRAGON.png"
            alt="gdragon picture leader of bigbang"
          />
          <div class="max-w-xl">
            <h3 class="font-semibold font-[Teko] text-4xl">G-Dragon</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae esse placeat tempora sequi explicabo. Aperiam blanditiis atque est, quis beatae temporibus ratione iure culpa suscipit, ipsa quos, a numquam minima.</p>
          </div>
        </div>
        <div class="flex flex-col-reverse lg:flex-row lg:justify-end lg:items-end lg:text-right text-xl gap-10">
          <div class="max-w-xl">
            <h3 class="font-semibold font-[Teko] text-4xl">T.O.P</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae esse placeat tempora sequi explicabo. Aperiam blanditiis atque est, quis beatae temporibus ratione iure culpa suscipit, ipsa quos, a numquam minima.</p>
          </div>
          <img class="hover:scale-110 transition duration-300 ease-in-out" src="@/assets/image/TOP.png" alt="top picture">
        </div>
        <div class="flex flex-col lg:flex-row lg:items-end text-xl gap-10">
          <img class="hover:scale-110 transition duration-300 ease-in-out" src="@/assets/image/TAEYANG.png" alt="taeyang picture">
          <div class="max-w-xl">
            <h3 class="font-semibold font-[Teko] text-4xl">Taeyang</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae esse placeat tempora sequi explicabo. Aperiam blanditiis atque est, quis beatae temporibus ratione iure culpa suscipit, ipsa quos, a numquam minima.</p>
          </div>
        </div>
        <div class="flex flex-col-reverse lg:flex-row lg:justify-end lg:items-end lg:text-right text-xl gap-10">
          <div class="max-w-xl">
            <h3 class="font-semibold font-[Teko] text-4xl">Daesung</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae esse placeat tempora sequi explicabo. Aperiam blanditiis atque est, quis beatae temporibus ratione iure culpa suscipit, ipsa quos, a numquam minima.</p>
          </div>
          <img class="hover:scale-110 transition duration-300 ease-in-out" src="@/assets/image/DAESUNG.png" alt="daesung picture">
        </div>
        <div>
          <div id="collapseExample" class="collapse">
            <div class="flex flex-col lg:flex-row lg:items-end text-xl gap-10">
              <img class="hover:scale-110 transition duration-300 ease-in-out" src="@/assets/image/SEUNGRI.jpg" alt="seungri picture">
              <div class="max-w-xl">
                <h3 class="font-semibold font-[Teko] text-4xl">Seungri</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae esse placeat tempora sequi explicabo. Aperiam blanditiis atque est, quis beatae temporibus ratione iure culpa suscipit, ipsa quos, a numquam minima.</p>
              </div>
            </div>
          </div>
          <button
            class="flex w-full justify-center px-20 pt-5 mb-5 cursor-default"
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#collapseExample" 
            aria-expanded="false" 
            aria-controls="collapseExample"
          >
            <icons-bigbang-crown class="w-14 h-14"/>
          </button>
        </div>
      </div>
    </section>
    <video-section id="last_music_video" class="snap-center" />
    <section id="crown_separate" class="flex w-full justify-center pt-20">
      <icons-bigbang-crown class="w-14 h-14"/>
    </section>
    <section id="concert_examples" class="container mx-auto pb-20">
      <h3 class="text-4xl font-bold font-[Teko] text-center pb-20">
        King of Kpop, Kpop Emperor, Idol of Idols
      </h3>
      <div class="space-y-20">
        <div class="space-y-2">
          <iframe
            ref="iframe"
            class="w-full h-full max-w-2xl object-cover aspect-video" 
            src="https://www.youtube.com/embed/4x9C31ECfRM" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          >
          </iframe>
          <p class="font-bold font-[Teko] text-2xl">
            BIGBANG - BANG BANG BANG<br>
            Mama 2015
          </p>
        </div>
        <div class="space-y-2">
          <iframe
            ref="iframe"
            class="w-full h-full max-w-2xl object-cover aspect-video lg:ml-auto" 
            src="https://www.youtube.com/embed/bGZZxgixkew" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          >
          </iframe>
          <p class="font-bold font-[Teko] text-2xl lg:text-right">
            BIGBANG - LOSER + BAE BAE + BANG BANG BANG<br>
            Mama 2015
          </p>
        </div>
        <div class="space-y-2">
          <iframe
            ref="iframe"
            class="w-full h-full max-w-2xl object-cover aspect-video" 
            src="https://www.youtube.com/embed/1F3HKthaaIA" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          >
          </iframe>
          <p class="font-bold font-[Teko] text-2xl">
            BIGBANG | Mama Performances
          </p>
        </div>
      </div>
    </section>
    <!-- <section id="music_videos" class="container mx-auto py-20">
      <h3 class="text-4xl font-bold font-[Teko] text-center pb-20">
        THEIR MUSICS
      </h3>
      <div class="grid grid-cols-2 xl:grid-cols-3 gap-10 items-center justify-center mb-10">
        <div v-for="mv in musicVideo" :key="mv">
          <img 
            class="w-full"
            src="@/assets/image/thumbnails/bangbangbang.webp"
            :alt="mv.title"
          />
        </div>
      </div>
      <div class="text-right">
        <a href="https://www.youtube.com/playlist?list=PL0D12C278EAF39032" target="_blank" class="w-full text-right font-bold font-[Teko] text-xl">SEE MORE</a>
      </div>
    </section> -->
    <section id="medias" class="container mx-auto pb-20 lg:py-20">
      <h3 class="text-4xl font-bold font-[Teko] text-center pb-14 lg:pb-20">
        MEDIAS
      </h3>
      <div class="space-y-10">
        <div class="flex flex-wrap gap-10 justify-center mx-auto">
          <a href="https://www.youtube.com/channel/UCzw-C7fNfs018R1FzIKnlaA" class="flex space-x-2 jusce items-center">
            <icons-youtube class="w-10 h-10"/>
            <p class="font-bold font-[Teko] pt-1.5 text-xl">YOUTUBE</p>
          </a>
          <a href="https://www.facebook.com/BIGBANG/" class="flex space-x-2 jusce items-center">
            <icons-facebook class="w-10 h-10"/>
            <p class="font-bold font-[Teko] pt-1.5 text-xl">FACEBOOK</p>
          </a>
          <a href="https://twitter.com/YG_GlobalVIP" class="flex space-x-2 jusce items-center">
            <icons-twitter class="w-10 h-10"/>
            <p class="font-bold font-[Teko] pt-1.5 text-xl">TWITTER</p>
          </a>
          <!-- <a href="https://twitter.com/YG_GlobalVIP" class="flex space-x-2 jusce items-center">
            <icons-tiktok class="w-10 h-10"/>
            <p class="font-bold font-[Teko] pt-1.5 text-xl">TIKTOK</p>
          </a> -->
        </div>
        <div class="flex flex-wrap gap-10 justify-center mx-auto">
          <a href="https://music.youtube.com/channel/UCI5OIwx9z32Zurb8t4Umzwg" class="flex space-x-2 jusce items-center">
            <icons-youtube-music class="w-10 h-10"/>
            <p class="font-bold font-[Teko] pt-1.5 text-xl">YT MUSIC</p>
          </a>
          <a href="https://open.spotify.com/artist/4Kxlr1PRlDKEB0ekOCyHgX" class="flex space-x-2 jusce items-center">
            <icons-spotify class="w-10 h-10"/>
            <p class="font-bold font-[Teko] pt-1.5 text-xl">SPOTIFY</p>
          </a>
          <a href="https://music.apple.com/fr/artist/bigbang/318754656" class="flex space-x-2 jusce items-center">
            <icons-apple-music class="w-10 h-10"/>
            <p class="font-bold font-[Teko] pt-1.5 text-xl">APPLE MUSIC</p>
          </a>
          <a href="https://tidal.com/browse/artist/12084" class="flex space-x-2 jusce items-center">
            <icons-tidal class="w-10 h-10"/>
            <p class="font-bold font-[Teko] pt-1.5 text-xl">TIDAL</p>
          </a>
          <a href="https://www.deezer.com/fr/artist/65209" class="flex space-x-2 jusce items-center">
            <icons-deezer class="w-10 h-10"/>
            <p class="font-bold font-[Teko] pt-1.5 text-xl">DEEZER</p>
          </a>
        </div>
      </div>
    </section>
    <section id="disclaimer" class="container mx-auto pb-20 lg:py-20">
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
  export default {
    name: 'Bigbang',

    data() {
      return {
        musicVideo: [
          {
            title: 'BANG BANG BANG',
            thumbnail: '@/assets/image/thumbnails/bangbangbang.webp',
            video: 'https://www.youtube.com/embed/4x9C31ECfRM',
          },
          {
            title: 'BANG BANG BANG',
            thumbnail: '@/assets/image/thumbnails/bangbangbang.webp',
            video: 'https://www.youtube.com/embed/4x9C31ECfRM',
          },
          {
            title: 'BANG BANG BANG',
            thumbnail: '@/assets/image/thumbnails/bangbangbang.webp',
            video: 'https://www.youtube.com/embed/4x9C31ECfRM',
          },
          {
            title: 'BANG BANG BANG',
            thumbnail: '@/assets/image/thumbnails/bangbangbang.webp',
            video: 'https://www.youtube.com/embed/4x9C31ECfRM',
          },
          {
            title: 'BANG BANG BANG',
            thumbnail: '@/assets/image/thumbnails/bangbangbang.webp',
            video: 'https://www.youtube.com/embed/4x9C31ECfRM',
          },
          {
            title: 'BANG BANG BANG',
            thumbnail: '@/assets/image/thumbnails/bangbangbang.webp',
            video: 'https://www.youtube.com/embed/4x9C31ECfRM',
          },
        ],
      }
    },

    mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', "https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js")
      document.head.appendChild(recaptchaScript)
    },
  }
</script>

<style> @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Teko:wght@600&display=swap'); </style>

<style>
.title-group {
  font-family: 'Teko', sans-serif;
  @apply text-4xl md:text-7xl lg:text-9xl 2xl:text-[230px] font-bold text-center;
}
</style>